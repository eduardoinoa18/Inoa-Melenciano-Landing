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
