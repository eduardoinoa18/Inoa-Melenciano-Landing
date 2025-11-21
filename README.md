# Inoa & Melenciano Services

**A comprehensive bilingual professional services agency** founded by Eduardo Inoa and Ader Melenciano, serving families, entrepreneurs, immigrants, and investors across the United States and Dominican Republic.

## Overview

Inoa & Melenciano Services combines expertise in real estate, financial services, tax preparation, credit optimization, immigration assistance, business formation, notary services, and administrative support—all under one trusted, bilingual brand.

### Core Services

1. **Real Estate Services (USA)** — Licensed REALTOR® services through Century 21 North East / The Fermin Group
   - Residential & commercial buying/selling
   - Investment analysis & multifamily properties
   - Mortgage coordination via Newfed Mortgage
   - Refinancing & homeownership counseling

2. **Paraíso Inmobiliario (Dominican Republic Real Estate)** — Exclusive DR investment division
   - Pre-construction developments
   - Airbnb-friendly investment properties
   - Land acquisition
   - Luxury and residential communities
   - Developer partnerships for U.S.-based investors

3. **Tax Preparation Services**
   - Individual & business tax filing
   - ITIN applications
   - Tax amendments
   - Self-employed & gig worker support
   - Multi-state filings

4. **Credit Repair & Optimization**
   - Credit report evaluation
   - Dispute resolution for inaccurate items
   - Score optimization strategies
   - Financial habit coaching

5. **Immigration Form Assistance & Document Preparation**
   - USCIS form completion (I-130, I-485, N-400, I-765, I-90, I-131)
   - Document organization & packet preparation
   - Application submission support
   - *Not legal representation; administrative support only*

6. **Business Registration & Entrepreneur Support**
   - LLC, S-Corp, C-Corp formation
   - DBA registration
   - EIN acquisition
   - Operating agreements
   - Compliance guidance

7. **Notary Public Services**
   - Real estate documents
   - Affidavits & contracts
   - Powers of attorney
   - Immigration support documents

8. **Translations & Administrative Support**
   - Document translations (non-certified)
   - Bill payment assistance
   - Form filling & application guidance
   - Digital account setup
   - Document organization

### Brand Identity

Positioned as a **premium, structured, bilingual service agency**—not a typical "multiservice office." We deliver executive-level quality with deep cultural connection and community trust within the Hispanic and Dominican diaspora.

### Target Audience

- Hispanic adults in the U.S.
- Dominican families and professionals
- First-time homebuyers
- DR real estate investors
- Immigrant communities
- Entrepreneurs & small business owners

### Partnerships

- **Century 21 North East / The Fermin Group** (Real Estate Brokerage)
- **Newfed Mortgage** (Mortgage & Refinancing)
- Dominican Republic developers & constructoras (Paraíso Inmobiliario)

## Technical Stack

- **Backend:** Node.js + Express 5.1.0
- **Lead Capture:** JSON storage + optional SMTP email forwarding (via Nodemailer)
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **i18n:** Custom dictionary-based bilingual system (EN/ES)

## Getting Started
```powershell
# From project root
npm install
# Copy env template
Copy-Item .env.example .env
# Edit .env with real email credentials
notepad .env
# Run development
npm run dev
```

Visit: http://localhost:3000

## Environment Variables
| Variable | Purpose |
|----------|---------|
| PORT | Server port |
| SMTP_HOST/PORT/SECURE | Outbound email server |
| SMTP_USER/SMTP_PASS | Auth credentials |
| LEAD_FORWARD_TO | Destination email for captured leads |

## Roadmap
- Implement secure lead storage & email forwarding
- Add captcha / bot mitigation
- Connect to CRM (HubSpot, Zoho, custom) via adapter
- Add analytics (privacy-compliant)

## License / Use
Internal business codebase. Not for redistribution.
