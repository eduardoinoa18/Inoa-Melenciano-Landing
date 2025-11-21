// Simple bilingual dictionary and runtime switch
const DICT = {
  en: {
    services: 'Services',
    'nav.home': 'Home', 'nav.services': 'Services', 'nav.about': 'About Us', 'nav.team': 'Our Team', 'nav.contact': 'Contact', 'nav.disclosures': 'Disclosures',
    'hero.title': 'Your Trusted Partner in Real Estate, Finance & Business Services',
    'hero.subtitle': 'Century 21 | Newfed Mortgage | Tax Prep | Credit Repair | Immigration Assistance | Business Registration | Notary | Paraíso Inmobiliario | Translations & Admin',
    'hero.cta': 'Start Your Journey Today',
    'trust.heading': 'Why Choose Us', 'trust.expertiseTitle': 'Full-Service', 'trust.expertiseDesc': 'From buying your dream home to preparing taxes—we have you covered.', 'trust.speedTitle': 'Bilingual Support', 'trust.speedDesc': 'English & Spanish expertise for every client.', 'trust.supportTitle': 'Dominican Focus', 'trust.supportDesc': 'Exclusive access to Dominican Republic investment opportunities.',
    'services.heading': 'Our Core Services',
    'svc.realEstateUS': 'Real Estate Services (US)', 'svc.realEstateUSDesc': 'Buying, selling, investing. Partnered with Century 21 North East & Newfed Mortgage.',
    'svc.realEstateDR': 'Paraíso Inmobiliario (DR)', 'svc.realEstateDRDesc': 'Invest in Dominican Republic properties—residential & commercial projects.',
    'svc.taxPrep': 'Tax Preparation', 'svc.taxPrepDesc': 'Personal and business tax filing services.',
    'svc.creditRepair': 'Credit Repair', 'svc.creditRepairDesc': 'Educational credit guidance to help rebuild your financial standing.',
    'svc.immigration': 'Immigration Form Assistance & Document Preparation', 'svc.immigrationDesc': 'Administrative help completing USCIS forms (not legal advice).',
    'svc.businessRegistration': 'Business Registration', 'svc.businessRegistrationDesc': 'LLC, Corp, EIN applications—start your business right.',
    'svc.notary': 'Notary Public', 'svc.notaryDesc': 'Authorized notarization for legal documents.',
    'svc.translationsAdmin': 'Translations & Administrative Support', 'svc.translationsAdminDesc': 'Bilingual help for documents, forms, accounts & daily tasks.',
    'common.learnMore': 'Learn More', 'common.readDisclosures': 'Read Full Disclosures',
    'lead.heading': 'Request a Free Consultation', 'lead.copy': 'Tell us what you need and we will connect you with the right expert.',
    'form.nameLabel': 'Full Name', 'form.emailLabel': 'Email', 'form.phoneLabel': 'Phone', 'form.interestLabel': 'Service Interest', 'form.messageLabel': 'Brief Details', 'form.submit': 'Submit',
    'form.opt.general': 'General Inquiry', 'form.opt.realEstateUS': 'Real Estate (US)', 'form.opt.realEstateDR': 'Real Estate (Dominican Republic)', 'form.opt.mortgage': 'Mortgage/Refinance', 'form.opt.taxPrep': 'Tax Preparation', 'form.opt.creditRepair': 'Credit Repair', 'form.opt.immigration': 'Immigration Assistance', 'form.opt.businessReg': 'Business Registration', 'form.opt.notary': 'Notary Service', 'form.opt.translationsAdmin': 'Translations & Admin Support',
    'disclaimer.heading': 'Important Disclosures', 'disclaimer.preview': 'Services provided for informational/administrative purposes. Not legal, tax, or immigration advice. Full disclosures below.',
    'footer.company': 'Company', 'footer.services': 'Services', 'footer.connect': 'Connect', 'footer.socialComingSoon': 'Follow us on social media (coming soon).', 'footer.newsletter': 'Stay Informed', 'footer.newsletterDesc': 'Newsletter sign-up coming soon.', 'footer.rights': 'All rights reserved.'
    , 'hero.pill.licensed': 'Licensed REALTOR®', 'hero.pill.drAccess': 'DR Investment Access', 'hero.pill.bilingual': 'Bilingual Expertise', 'hero.pill.secure': 'Secure & Professional'
    , 'metrics.serviceAreas': 'Service Areas', 'metrics.markets': 'US & DR', 'metrics.clientFocus': 'Client Focus', 'metrics.access': 'Access'
    , 'metrics.desc.serviceAreas': 'Bilingual coverage spanning real estate to admin support.'
    , 'metrics.desc.markets': 'Domestic & international property opportunities.'
    , 'metrics.desc.clientFocus': 'Personalized guidance built around your goals.'
    , 'metrics.desc.access': 'Submit leads anytime—rapid follow-up.'
    , 'value.heading': 'Why Clients Choose Us'
    , 'value.bilingualPrecision.title': 'Bilingual Precision'
    , 'value.bilingualPrecision.desc': 'Native-level English & Spanish communication ensures clarity and trust.'
    , 'value.integrated.title': 'Integrated Approach'
    , 'value.integrated.desc': 'Real estate, tax, credit and admin services unified under one brand.'
    , 'value.investmentBridge.title': 'Investment Bridge'
    , 'value.investmentBridge.desc': 'Unique access to Dominican Republic real estate opportunities.'
    , 'value.compliance.title': 'Compliance Minded'
    , 'value.compliance.desc': 'Professional handling with proper disclosures and transparent process.'
    , 'status.sending': 'Sending...'
    , 'status.success': '✓ Received. We will contact you shortly.'
    , 'status.error': 'Submission error. Please try again later.'
    , 'status.network': 'Network error.'
    , 'lang.switch.en': 'EN'
    , 'lang.switch.es': 'ES'
    , 'credit.guidance.desc': 'Educational guidance and best practices. We do not guarantee outcomes.'
    , 'credit.scope.title': 'What We Provide'
    , 'credit.scope.education': 'Education about dispute processes and credit report review.'
    , 'credit.scope.templates': 'Templates and organization support to act confidently.'
    , 'credit.scope.referrals': 'Referrals to third parties when appropriate.'
    , 'credit.cta.title': 'Talk With Us'
    , 'realus.intro.desc': "Whether you're buying your first home, selling a property, or investing for long-term wealth, we guide you every step of the way. Partnered with Century 21 North East and Newfed Mortgage."
    , 'realus.offer.title': 'What We Offer'
    , 'realus.offer.buy': 'Home Buying: First-time buyer guidance, property search, negotiation, closing support.'
    , 'realus.offer.sell': 'Home Selling: Market analysis, listing, staging tips, marketing strategy.'
    , 'realus.offer.invest': 'Investment Properties: Multi-family, rental income analysis, portfolio building.'
    , 'realus.offer.mortgage': 'Mortgage Applications: Pre-approval, application support via Newfed Mortgage partners.'
    , 'realus.offer.refinance': 'Refinancing: Lower your rate or tap into equity with refinance guidance.'
    , 'realus.offer.commercial': 'Commercial Real Estate: Office, retail, warehouse—investment and leasing support.'
    , 'realus.cta.title': 'Schedule a Consultation'
    , 'realdr.hero.title': 'Paraíso Inmobiliario – Dominican Republic Real Estate'
    , 'realdr.hero.intro': 'Invest in the Caribbean paradise. We connect you with premium residential and commercial projects in the Dominican Republic—tourism-driven markets, retirement havens, and high-growth opportunities.'
    , 'realdr.why.title': 'Why Dominican Republic?'
    , 'realdr.why.tourism': 'Tourism Hub: Millions of visitors annually drive rental demand in Punta Cana, Santo Domingo, and more.'
    , 'realdr.why.affordable': 'Affordable Entry: Lower property prices compared to US coastal markets.'
    , 'realdr.why.retirement': 'Retirement & Second Home: Ideal climate, growing expat communities, and lifestyle appeal.'
    , 'realdr.why.diversification': 'Portfolio Diversification: Hedge against US market volatility with Caribbean real estate.'
    , 'realdr.help.title': 'How We Help'
    , 'realdr.help.curated': 'Curated project listings (condos, villas, commercial lots).'
    , 'realdr.help.developer': 'Developer connections and exclusive pre-launch opportunities.'
    , 'realdr.help.bilingual': 'Bilingual transaction support (legal referrals, currency exchange guidance).'
    , 'realdr.help.management': 'Property management and rental program introductions.'
    , 'realdr.cta.title': 'Explore Your Investment Options'
    , 'tax.intro.desc': 'Personal and business tax returns prepared accurately and on time. Bilingual support to maximize deductions and ensure compliance.'
    , 'tax.services.title': 'Services Included'
    , 'tax.services.personal': 'Personal federal and state tax returns (1040, schedules).'
    , 'tax.services.business': 'Business tax filings (sole proprietor, LLC, S-Corp, C-Corp).'
    , 'tax.services.rental': 'Rental property income and expense reporting.'
    , 'tax.services.selfEmployment': 'Self-employment and freelancer guidance.'
    , 'tax.services.planning': 'Year-round tax planning and estimated payment support.'
    , 'tax.cta.title': 'Get Started'
  },
  es: {
    services: 'Servicios',
    'nav.home': 'Inicio', 'nav.services': 'Servicios', 'nav.about': 'Sobre Nosotros', 'nav.team': 'Nuestro Equipo', 'nav.contact': 'Contacto', 'nav.disclosures': 'Avisos',
    'hero.title': 'Tu Socio de Confianza en Bienes Raíces, Finanzas y Servicios de Negocios',
    'hero.subtitle': 'Century 21 | Newfed Mortgage | Impuestos | Crédito | Asistencia Migratoria | Registro de Negocios | Notario | Paraíso Inmobiliario | Traducciones & Soporte Admin',
    'hero.cta': 'Comienza Tu Camino Hoy',
    'trust.heading': 'Por Qué Elegirnos', 'trust.expertiseTitle': 'Servicio Completo', 'trust.expertiseDesc': 'Desde comprar tu hogar soñado hasta preparar impuestos—te cubrimos.', 'trust.speedTitle': 'Soporte Bilingüe', 'trust.speedDesc': 'Experiencia en inglés y español para cada cliente.', 'trust.supportTitle': 'Enfoque Dominicano', 'trust.supportDesc': 'Acceso exclusivo a oportunidades de inversión en República Dominicana.',
    'services.heading': 'Nuestros Servicios Principales',
    'svc.realEstateUS': 'Servicios Inmobiliarios (EE.UU.)', 'svc.realEstateUSDesc': 'Compra, venta, inversión. Asociados con Century 21 North East & Newfed Mortgage.',
    'svc.realEstateDR': 'Paraíso Inmobiliario (RD)', 'svc.realEstateDRDesc': 'Invierte en propiedades de República Dominicana—proyectos residenciales y comerciales.',
    'svc.taxPrep': 'Preparación de Impuestos', 'svc.taxPrepDesc': 'Servicios de declaración de impuestos personales y de negocios.',
    'svc.creditRepair': 'Reparación de Crédito', 'svc.creditRepairDesc': 'Orientación educativa de crédito para ayudar a reconstruir tu posición financiera.',
    'svc.immigration': 'Asistencia en Formularios de Inmigración & Preparación de Documentos', 'svc.immigrationDesc': 'Ayuda administrativa para completar formularios USCIS (no asesoría legal).',
    'svc.businessRegistration': 'Registro de Negocios', 'svc.businessRegistrationDesc': 'LLC, Corp, solicitudes de EIN—inicia tu negocio correctamente.',
    'svc.notary': 'Notario Público', 'svc.notaryDesc': 'Notarización autorizada para documentos legales.',
    'svc.translationsAdmin': 'Traducciones & Soporte Administrativo', 'svc.translationsAdminDesc': 'Ayuda bilingüe para documentos, formularios, cuentas y tareas diarias.',
    'common.learnMore': 'Ver Más', 'common.readDisclosures': 'Leer Avisos Completos',
    'lead.heading': 'Solicita una Consulta Gratuita', 'lead.copy': 'Cuéntanos qué necesitas y te conectaremos con el experto adecuado.',
    'form.nameLabel': 'Nombre Completo', 'form.emailLabel': 'Correo', 'form.phoneLabel': 'Teléfono', 'form.interestLabel': 'Interés de Servicio', 'form.messageLabel': 'Detalles Breves', 'form.submit': 'Enviar',
    'form.opt.general': 'Consulta General', 'form.opt.realEstateUS': 'Bienes Raíces (EE.UU.)', 'form.opt.realEstateDR': 'Bienes Raíces (República Dominicana)', 'form.opt.mortgage': 'Hipoteca/Refinanciación', 'form.opt.taxPrep': 'Preparación de Impuestos', 'form.opt.creditRepair': 'Reparación de Crédito', 'form.opt.immigration': 'Asistencia Migratoria', 'form.opt.businessReg': 'Registro de Negocios', 'form.opt.notary': 'Servicio de Notario', 'form.opt.translationsAdmin': 'Traducciones & Soporte Admin',
    'disclaimer.heading': 'Avisos Importantes', 'disclaimer.preview': 'Servicios provistos con fines informativos/administrativos. No asesoría legal, fiscal o de inmigración. Avisos completos abajo.',
    'footer.company': 'Compañía', 'footer.services': 'Servicios', 'footer.connect': 'Conectar', 'footer.socialComingSoon': 'Síguenos en redes sociales (próximamente).', 'footer.newsletter': 'Mantente Informado', 'footer.newsletterDesc': 'Boletín informativo próximamente.', 'footer.rights': 'Todos los derechos reservados.'
    , 'hero.pill.licensed': 'Agente Inmobiliario Licenciado', 'hero.pill.drAccess': 'Acceso a Inversiones RD', 'hero.pill.bilingual': 'Experiencia Bilingüe', 'hero.pill.secure': 'Seguro y Profesional'
    , 'metrics.serviceAreas': 'Áreas de Servicio', 'metrics.markets': 'EE.UU. & RD', 'metrics.clientFocus': 'Enfoque al Cliente', 'metrics.access': 'Acceso'
    , 'metrics.desc.serviceAreas': 'Cobertura bilingüe desde bienes raíces hasta soporte administrativo.'
    , 'metrics.desc.markets': 'Oportunidades inmobiliarias nacionales e internacionales.'
    , 'metrics.desc.clientFocus': 'Guía personalizada basada en tus objetivos.'
    , 'metrics.desc.access': 'Envía solicitudes en cualquier momento—respuesta rápida.'
    , 'value.heading': 'Por Qué Nos Eligen'
    , 'value.bilingualPrecision.title': 'Precisión Bilingüe'
    , 'value.bilingualPrecision.desc': 'Comunicación nativa en inglés y español para claridad y confianza.'
    , 'value.integrated.title': 'Enfoque Integrado'
    , 'value.integrated.desc': 'Bienes raíces, impuestos, crédito y soporte administrativo en una sola marca.'
    , 'value.investmentBridge.title': 'Puente de Inversión'
    , 'value.investmentBridge.desc': 'Acceso único a oportunidades inmobiliarias en República Dominicana.'
    , 'value.compliance.title': 'Cumplimiento y Transparencia'
    , 'value.compliance.desc': 'Manejo profesional con avisos y procesos claros.'
    , 'status.sending': 'Enviando...'
    , 'status.success': '✓ Recibido. Te contactaremos pronto.'
    , 'status.error': 'Error en el envío. Intenta nuevamente.'
    , 'status.network': 'Error de red.'
    , 'lang.switch.en': 'EN'
    , 'lang.switch.es': 'ES'
    , 'credit.guidance.desc': 'Orientación educativa y buenas prácticas. No garantizamos resultados.'
    , 'credit.scope.title': 'Lo Que Ofrecemos'
    , 'credit.scope.education': 'Educación sobre procesos de disputas y revisión de reportes de crédito.'
    , 'credit.scope.templates': 'Plantillas y apoyo organizativo para actuar con confianza.'
    , 'credit.scope.referrals': 'Referencias a terceros cuando corresponda.'
    , 'credit.cta.title': 'Conversemos'
    , 'realus.intro.desc': 'Ya sea que estés comprando tu primer hogar, vendiendo una propiedad o invirtiendo para riqueza a largo plazo, te guiamos en cada paso. En asociación con Century 21 North East y Newfed Mortgage.'
    , 'realus.offer.title': 'Lo Que Ofrecemos'
    , 'realus.offer.buy': 'Compra de Vivienda: Guía para compradores primerizos, búsqueda de propiedades, negociación, apoyo en cierre.'
    , 'realus.offer.sell': 'Venta de Vivienda: Análisis de mercado, listado, consejos de presentación, estrategia de marketing.'
    , 'realus.offer.invest': 'Propiedades de Inversión: Multifamiliares, análisis de ingresos por alquiler, construcción de portafolio.'
    , 'realus.offer.mortgage': 'Solicitudes de Hipoteca: Pre-aprobación, apoyo de solicitud a través de socios de Newfed Mortgage.'
    , 'realus.offer.refinance': 'Refinanciamiento: Reduce tu tasa o aprovecha el capital con guía de refinanciamiento.'
    , 'realus.offer.commercial': 'Bienes Raíces Comerciales: Oficina, comercio, almacén—inversión y apoyo de arrendamiento.'
    , 'realus.cta.title': 'Agenda una Consulta'
    , 'realdr.hero.title': 'Paraíso Inmobiliario – Bienes Raíces en República Dominicana'
    , 'realdr.hero.intro': 'Invierte en el paraíso caribeño. Te conectamos con proyectos residenciales y comerciales premium en República Dominicana—mercados impulsados por turismo, refugios de retiro y oportunidades de alto crecimiento.'
    , 'realdr.why.title': '¿Por Qué República Dominicana?'
    , 'realdr.why.tourism': 'Centro Turístico: Millones de visitantes anuales impulsan la demanda de alquileres en Punta Cana, Santo Domingo y más.'
    , 'realdr.why.affordable': 'Entrada Accesible: Precios de propiedades más bajos en comparación con mercados costeros de EE.UU.'
    , 'realdr.why.retirement': 'Retiro y Segunda Vivienda: Clima ideal, comunidades de expatriados en crecimiento y atractivo de estilo de vida.'
    , 'realdr.why.diversification': 'Diversificación de Portafolio: Protección contra la volatilidad del mercado estadounidense con bienes raíces caribeños.'
    , 'realdr.help.title': 'Cómo Te Ayudamos'
    , 'realdr.help.curated': 'Listados de proyectos seleccionados (condominios, villas, lotes comerciales).'
    , 'realdr.help.developer': 'Conexiones con desarrolladores y oportunidades exclusivas de pre-lanzamiento.'
    , 'realdr.help.bilingual': 'Apoyo de transacciones bilingüe (referencias legales, guía de cambio de moneda).'
    , 'realdr.help.management': 'Administración de propiedades e introducciones a programas de alquiler.'
    , 'realdr.cta.title': 'Explora Tus Opciones de Inversión'
    , 'tax.intro.desc': 'Declaraciones de impuestos personales y empresariales preparadas con precisión y a tiempo. Soporte bilingüe para maximizar deducciones y garantizar cumplimiento.'
    , 'tax.services.title': 'Servicios Incluidos'
    , 'tax.services.personal': 'Declaraciones de impuestos federales y estatales personales (1040, anexos).'
    , 'tax.services.business': 'Presentaciones de impuestos comerciales (propietario único, LLC, S-Corp, C-Corp).'
    , 'tax.services.rental': 'Reporte de ingresos y gastos de propiedades de alquiler.'
    , 'tax.services.selfEmployment': 'Orientación para trabajadores autónomos y freelancers.'
    , 'tax.services.planning': 'Planificación fiscal durante todo el año y apoyo de pagos estimados.'
    , 'tax.cta.title': 'Comienza'
  }
};

function applyLanguage(lang){
  const dict = DICT[lang] || DICT.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key]) el.textContent = dict[key];
  });
  // Toggle any elements with explicit language blocks
  document.querySelectorAll('[data-lang]')
    .forEach(el => el.style.display = (el.getAttribute('data-lang') === lang ? '' : 'none'));
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    const code = btn.getAttribute('data-lang');
    if(dict[`lang.switch.${code}`]) btn.textContent = dict[`lang.switch.${code}`];
  });
}

window.addEventListener('DOMContentLoaded', () => {
  applyLanguage('en');
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
