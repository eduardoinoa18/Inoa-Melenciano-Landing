# Quick Start — Deploy to GitHub & Vercel

## 🚀 Fast Track (5 Minutes)

### 1. Initialize Git & Push to GitHub

```powershell
cd "c:\Users\eduar\OneDrive\Desktop\Inoa Melenciano Landing"

git init
git add .
git commit -m "Initial commit - Complete Inoa & Melenciano Services site"

# Create repo on GitHub.com first (Private recommended), then:
git remote add origin https://github.com/YOUR_USERNAME/inoa-melenciano-services.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel (Web Dashboard)

1. Go to **https://vercel.com/new**
2. Click **Import Git Repository**
3. Select `inoa-melenciano-services`
4. Click **Deploy** (accept all defaults)
5. Done! Your site is live at `https://inoa-melenciano-services.vercel.app`

### 3. Optional: Add Custom Domain

1. In Vercel project → **Settings → Domains**
2. Add `inoamelenciano.com` (or your domain)
3. Follow DNS instructions
4. HTTPS automatically configured

---

## 📧 Optional: Enable Email Forwarding for Leads

In Vercel dashboard:
1. Go to **Settings → Environment Variables**
2. Add:
   - `SMTP_HOST` → `smtp.gmail.com`
   - `SMTP_PORT` → `587`
   - `SMTP_SECURE` → `false`
   - `SMTP_USER` → your Gmail address
   - `SMTP_PASS` → [Gmail App Password](https://support.google.com/accounts/answer/185833)
   - `LEAD_FORWARD_TO` → destination email
3. Click **Save** → **Redeploy**

---

## ✅ What's Included

- ✅ 8 service pages (Real Estate US/DR, Tax, Credit, Immigration, Business, Notary, Translations)
- ✅ Fully bilingual (English/Spanish)
- ✅ Lead capture forms on every page
- ✅ About, Team, Contact, Disclosures pages
- ✅ Mobile-responsive design
- ✅ Zero errors, production-ready

---

## 📂 Important Files

- `server.js` — Express backend (handles forms)
- `index.html` — Main landing page
- `assets/js/i18n.js` — Language switching
- `services/*.html` — Service detail pages
- `vercel.json` — Deployment config
- `.env.example` — Email config template

---

## 🆘 Need Help?

- Full deployment guide: `DEPLOYMENT.md`
- Production checklist: `PRODUCTION-CHECKLIST.md`
- Business overview: `README.md`

---

**Your site is ready to launch! 🎉**
