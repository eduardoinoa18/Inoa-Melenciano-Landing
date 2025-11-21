require('dotenv').config();
const fs = require('fs').promises;
const path = require('path');
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  // In case body wasn't parsed (edge case), attempt manual parse
  if (!body || typeof body !== 'object') {
    try {
      body = JSON.parse(req.rawBody || '{}');
    } catch (_) {
      body = {};
    }
  }

  const { name = '', email = '', phone = '', interest = 'general', message = '', company = '' } = body;
  if (company) {
    return res.status(201).json({ ok: true, filtered: true });
  }
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const entry = {
    ts: new Date().toISOString(),
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    phone: String(phone || '').slice(0, 50),
    interest: String(interest || 'general').slice(0, 100),
    message: String(message || '').slice(0, 2000),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
  };

  try {
    const dataDir = path.join(process.cwd(), 'data');
    const leadsFile = path.join(dataDir, 'leads.json');
    try { await fs.mkdir(dataDir, { recursive: true }); } catch (_) {}
    let arr = [];
    try {
      const raw = await fs.readFile(leadsFile, 'utf-8');
      arr = JSON.parse(raw);
      if (!Array.isArray(arr)) arr = [];
    } catch (_) { arr = []; }
    arr.push(entry);
    await fs.writeFile(leadsFile, JSON.stringify(arr, null, 2));

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, LEAD_FORWARD_TO, DISPLAY_FROM_EMAIL } = process.env;
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && LEAD_FORWARD_TO) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: String(SMTP_SECURE || 'false').toLowerCase() === 'true',
        auth: { user: SMTP_USER, pass: SMTP_PASS }
      });
      const fromAddress = DISPLAY_FROM_EMAIL || SMTP_USER;
      const subject = `New Lead: ${entry.name} (${entry.interest})`;
      const text = `New lead captured\n\nName: ${entry.name}\nEmail: ${entry.email}\nPhone: ${entry.phone}\nInterest: ${entry.interest}\nMessage: ${entry.message}\nTime: ${entry.ts}\nIP: ${entry.ip}`;
      try {
        await transporter.sendMail({
          from: `Inoa & Melenciano Services <${fromAddress}>`,
          to: LEAD_FORWARD_TO,
          subject,
          text
        });
      } catch (mailErr) {
        console.warn('Lead forwarding failed:', mailErr.message);
      }

      const confirmSubject = 'Thank You for Contacting Inoa & Melenciano Services';
      const confirmText = `Dear ${entry.name},\n\nThank you for reaching out to Inoa & Melenciano Services. We have received your inquiry regarding ${entry.interest} and will contact you shortly.\n\nWhat you submitted:\nName: ${entry.name}\nEmail: ${entry.email}\nPhone: ${entry.phone}\nService Interest: ${entry.interest}\nMessage: ${entry.message}\n\nOur team reviews all inquiries promptly and will respond within 1-2 business days. If you need immediate assistance, please call us directly.\n\nBest regards,\nInoa & Melenciano Services Team\n\nThis is an automated confirmation. Please do not reply to this email.`;
      const confirmHtml = `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: #0d4d8a; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 1.5rem;">Inoa & Melenciano Services</h1>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <p style="font-size: 1.1rem; color: #222;">Dear <strong>${entry.name}</strong>,</p>
            <p style="color: #555; line-height: 1.6;">Thank you for reaching out to <strong>Inoa & Melenciano Services</strong>. We have received your inquiry regarding <em>${entry.interest}</em> and will contact you shortly.</p>
            <div style="background: #f5f7fa; padding: 15px; border-left: 4px solid #0d4d8a; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #0d4d8a; font-size: 1rem;">What you submitted:</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Name:</strong> ${entry.name}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Email:</strong> ${entry.email}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Phone:</strong> ${entry.phone || 'Not provided'}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Service Interest:</strong> ${entry.interest}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Message:</strong> ${entry.message || 'No additional details'}</p>
            </div>
            <p style="color: #555; line-height: 1.6;">Our team reviews all inquiries promptly and will respond within <strong>1-2 business days</strong>. If you need immediate assistance, please call us directly.</p>
            <p style="color: #555; margin-top: 30px;">Best regards,<br><strong>Inoa & Melenciano Services Team</strong></p>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
            <p style="font-size: 0.85rem; color: #999; text-align: center;">This is an automated confirmation. Please do not reply to this email.</p>
          </div>
        </div>
      `;
      try {
        await transporter.sendMail({
          from: `Inoa & Melenciano Services <${fromAddress}>`,
          to: entry.email,
          subject: confirmSubject,
          text: confirmText,
          html: confirmHtml
        });
      } catch (confirmErr) {
        console.warn('Client confirmation email failed:', confirmErr.message);
      }
    } else {
      console.log('SMTP not fully configured; stored lead without email.');
    }

    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error('Lead processing error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
};
