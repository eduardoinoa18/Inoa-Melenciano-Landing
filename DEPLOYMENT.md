# Deployment Guide — Inoa & Melenciano Services

## Prerequisites
- GitHub account
- Vercel account (free tier works)
- Git installed locally

## Step 1: Initialize Git Repository

```powershell
cd "c:\Users\eduar\OneDrive\Desktop\Inoa Melenciano Landing"
git init
git add .
git commit -m "Initial commit - Inoa & Melenciano Services landing site"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `inoa-melenciano-services`
3. Set to **Private** (recommended for business site)
4. Do NOT initialize with README (already exists)
5. Click **Create repository**

## Step 3: Push to GitHub

```powershell
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/inoa-melenciano-services.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)
1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your GitHub account and repository
4. Project name: `inoa-melenciano-services`
5. Framework Preset: **Other**
6. Root Directory: `./`
7. Build Command: (leave empty)
8. Output Directory: (leave empty)
9. Click **Deploy**

### Option B: Vercel CLI
```powershell
npm install -g vercel
vercel login
vercel --prod
```

## Step 5: Configure Environment Variables (Optional)

If you want email forwarding for lead capture:

1. In Vercel dashboard, go to **Project Settings → Environment Variables**
2. Add these variables:
   - `SMTP_HOST` = your SMTP server (e.g., `smtp.gmail.com`)
   - `SMTP_PORT` = `587` (for TLS) or `465` (for SSL)
   - `SMTP_SECURE` = `false` (for port 587) or `true` (for port 465)
   - `SMTP_USER` = your email address
   - `SMTP_PASS` = your email password or app-specific password
   - `LEAD_FORWARD_TO` = destination email for leads
3. Click **Save**
4. Redeploy from **Deployments** tab

## Step 6: Custom Domain (Optional)

1. In Vercel project, go to **Settings → Domains**
2. Add your domain (e.g., `inoamelenciano.com`)
3. Follow DNS configuration instructions
4. Vercel provides automatic HTTPS

## Maintenance

### Updating Content
```powershell
# Make your changes
git add .
git commit -m "Update services/content"
git push
```
Vercel will automatically redeploy on push to `main` branch.

### Viewing Leads
Leads are stored in `data/leads.json` (not deployed to Vercel).
For production, integrate with a CRM or database service.

### Monitoring
- View deployment logs in Vercel dashboard
- Check analytics in **Analytics** tab (requires Pro plan)

## Production Checklist

✅ All navigation links updated
✅ All 8 service pages created
✅ Bilingual i18n dictionary complete
✅ Lead forms updated with all service options
✅ About, Team, Disclosures pages refined
✅ README updated with business overview
✅ .gitignore configured
✅ vercel.json deployment config added
✅ All linting errors resolved
✅ Server tested locally (port 3000)

## Support

For technical issues with deployment:
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com

For site updates, refer to `README.md` in the project root.
