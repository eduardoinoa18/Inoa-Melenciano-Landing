require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static assets
app.use(express.static(path.join(__dirname)));

// Lead capture endpoint (stores to JSON and attempts email forward)
app.post('/api/lead', async (req, res) => {
  const { name = '', email = '', phone = '', interest = 'general', message = '' } = req.body || {};
  if(!name || !email){
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  const entry = {
    ts: new Date().toISOString(),
    name: String(name).slice(0,200),
    email: String(email).slice(0,200),
    phone: String(phone||'').slice(0,50),
    interest: String(interest||'general').slice(0,100),
    message: String(message||'').slice(0,2000),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
  };
  try {
    const dataDir = path.join(__dirname, 'data');
    const leadsFile = path.join(dataDir, 'leads.json');
    try { await fs.mkdir(dataDir, { recursive: true }); } catch(_){}
    let arr = [];
    try {
      const raw = await fs.readFile(leadsFile, 'utf-8');
      arr = JSON.parse(raw);
      if(!Array.isArray(arr)) arr = [];
    } catch(_) { arr = []; }
    arr.push(entry);
    await fs.writeFile(leadsFile, JSON.stringify(arr, null, 2));

    // Attempt to email forward if SMTP is configured
    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, LEAD_FORWARD_TO } = process.env;
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && LEAD_FORWARD_TO) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: String(SMTP_SECURE||'false').toLowerCase() === 'true',
        auth: { user: SMTP_USER, pass: SMTP_PASS }
      });
      const subject = `New Lead: ${entry.name} (${entry.interest})`;
      const text = `New lead captured\n\nName: ${entry.name}\nEmail: ${entry.email}\nPhone: ${entry.phone}\nInterest: ${entry.interest}\nMessage: ${entry.message}\nTime: ${entry.ts}\nIP: ${entry.ip}`;
      try {
        await transporter.sendMail({
          from: `Leads <${SMTP_USER}>`,
          to: LEAD_FORWARD_TO,
          subject,
          text
        });
      } catch (mailErr) {
        console.warn('Email forwarding failed:', mailErr.message);
      }
    } else {
      console.log('SMTP not fully configured; stored lead without email.');
    }

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Lead processing error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
});

// Fallback to index.html (Express v5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Inoa & Melenciano Services server running on port ${PORT}`);
});
