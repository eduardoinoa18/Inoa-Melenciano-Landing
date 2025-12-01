// Main interaction logic for Inoa & Melenciano Services
// Features: dark mode toggle, mobile nav, contact form, scroll effects, back-to-top, enhanced UX
(function(){
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleFooter = document.getElementById('themeToggleFooter');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const contactForm = document.getElementById('contactForm') || document.getElementById('leadForm');
  const statusEl = document.getElementById('formStatus');
  const yearEl = document.getElementById('year');
  const header = document.querySelector('.site-header');

  // Set footer year
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Add page load animation
  document.addEventListener('DOMContentLoaded', () => {
    body.style.opacity = '1';
  });

  // Restore theme preference
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark') {
    body.classList.remove('theme-light');
  } else if(savedTheme === 'light') {
    body.classList.add('theme-light');
  }
  updateThemeText();

  function toggleTheme(){
    body.classList.toggle('theme-light');
    const mode = body.classList.contains('theme-light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
    updateThemeText();
  }
  function updateThemeText(){
    const light = body.classList.contains('theme-light');
    const icon = light ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    if(themeToggle) themeToggle.innerHTML = icon;
    if(themeToggleFooter) themeToggleFooter.innerHTML = icon;
  }
  themeToggle && themeToggle.addEventListener('click', toggleTheme);
  themeToggleFooter && themeToggleFooter.addEventListener('click', toggleTheme);

  // Create back-to-top button
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  function setBackToTopPosition(){
    const bottom = (window.innerWidth <= 768) ? '6rem' : '2rem';
    backToTop.style.cssText = `position:fixed;bottom:${bottom};right:2rem;width:50px;height:50px;background:var(--gold);color:#000;border:none;border-radius:50%;font-size:1.5rem;cursor:pointer;opacity:0;visibility:hidden;transition:all 0.3s;box-shadow:var(--shadow);z-index:60;display:flex;align-items:center;justify-content:center;`;
  }
  setBackToTopPosition();
  window.addEventListener('resize', setBackToTopPosition);
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(backToTop);

  // Scroll effects
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Header scroll effect
    if(header){
      if(currentScroll > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    
    // Back-to-top visibility
    if(currentScroll > 300){
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
    
    lastScroll = currentScroll;
  });

  // Mobile navigation toggle
  if(navToggle && navLinks){
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    
    // Mobile dropdown support
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.dd-btn');
      if(btn){
        btn.addEventListener('click', (e) => {
          if(window.innerWidth <= 768){
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('open');
          }
        });
      }
    });
  }

  // Close nav if clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if(navLinks && navLinks.classList.contains('open')){
      if(!navLinks.contains(e.target) && e.target !== navToggle){
        navLinks.classList.remove('open');
        navToggle && navToggle.setAttribute('aria-expanded','false');
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
      }
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if(href !== '#' && href.length > 1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if(navLinks && navLinks.classList.contains('open')){
            navLinks.classList.remove('open');
            navToggle && navToggle.setAttribute('aria-expanded','false');
          }
        }
      }
    });
  });

  // Smooth scroll animations with Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Apply animation to cards and sections
  document.querySelectorAll('.metric-card, .service-card, .value-item, .svc-card, .vp-item, .hub-card, .process-step, .property-type, .form-helper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeInObserver.observe(el);
  });

  // Contact form submit enhancement with loading state
  if(contactForm && statusEl){
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const lang = document.documentElement.lang || 'en';
      const dict = (typeof DICT !== 'undefined' && DICT[lang]) ? DICT[lang] : {};

      // Honeypot check
      const honeypot = contactForm.querySelector('input[name="website"]');
      if(honeypot && honeypot.value){
        // Silently ignore bots
        return;
      }

      // Optional file validation (Tax Prep intake)
      const docsInput = contactForm.querySelector('#docs');
      const fileErrorEl = document.getElementById('fileError');
      const validateFiles = () => {
        if(!docsInput || !docsInput.files) return true;
        fileErrorEl && (fileErrorEl.textContent = '');
        const files = Array.from(docsInput.files);
        if(files.length > 10){ fileErrorEl && (fileErrorEl.textContent = 'Máximo 10 archivos.'); return false; }
        const allowed = ['application/pdf','image/jpeg','image/png'];
        let total = 0;
        for(const f of files){
          total += f.size;
          if(!allowed.includes(f.type)){
            fileErrorEl && (fileErrorEl.textContent = 'Solo PDF, JPG o PNG.');
            return false;
          }
        }
        if(total > 50 * 1024 * 1024){
          fileErrorEl && (fileErrorEl.textContent = 'Tamaño total supera 50MB.');
          return false;
        }
        return true;
      };
      if(!validateFiles()){
        // Don't proceed if invalid files
        return;
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      if(submitBtn){
        submitBtn.disabled = true;
        submitBtn.innerHTML = (dict['status.sending'] || 'Sending') + ' <span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin 0.8s linear infinite;margin-left:.5rem;vertical-align:middle;"></span>';
      }
      statusEl.textContent = '';
      statusEl.className = 'status';

      // Build JSON payload, excluding file blobs
      const fd = new FormData(contactForm);
      const payload = {};
      for(const [key, value] of fd.entries()){
        if(key === 'docs') continue; // files handled via secure portal later
        payload[key] = value;
      }

      // GA4 event (non-blocking)
      try {
        const hasFiles = docsInput && docsInput.files && docsInput.files.length > 0;
        window.gtag && window.gtag('event', 'lead_form_submitted', {
          form_id: contactForm.id || 'contactForm',
          has_files: !!hasFiles,
          interest: payload.interest || 'general'
        });
      } catch(_){ }

      try {
        const res = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if(!res.ok){
          const text = await res.text();
          throw new Error(text || 'Request failed');
        }
        statusEl.innerHTML = '<span style="color:#4caf50;">✓</span> ' + (dict['status.success'] || 'Received. We will contact you shortly.');
        statusEl.style.color = '#4caf50';
        contactForm.reset();
        setTimeout(() => statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
      } catch(err){
        statusEl.innerHTML = '<span style="color:#f44336;">✗</span> ' + (dict['status.error'] || 'Submission error. Please try again.');
        statusEl.style.color = '#f44336';
      } finally {
        if(submitBtn){
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    });
  }
})();

  // ========== FLOATING ACTION BUTTONS (Desktop only) ==========
  // We already have a sticky mobile CTA; hide legacy floating icons on mobile
  if(window.innerWidth > 768){
    const floatingActions = document.createElement('div');
    floatingActions.className = 'floating-actions';
    floatingActions.innerHTML = `
      <a href="https://wa.me/19783909619" target="_blank" rel="noopener" class="floating-btn whatsapp">
        <span class="tooltip">WhatsApp</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <button class="floating-btn contact" onclick="document.querySelector('#contact, .lead-capture, .contact-section').scrollIntoView({behavior: 'smooth'})">
        <span class="tooltip">Contact</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </button>
    `;
    document.body.appendChild(floatingActions);
  }

  // ========== JOIN FORM HANDLER (for join-us.html) ==========
  const joinForm = document.getElementById('joinForm');
  if(joinForm){
    joinForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const statusEl = document.getElementById('formStatus');
      const submitBtn = this.querySelector('button[type="submit"]');
      
      // Gather all form data
      const formData = new FormData(this);
      const data = {};
      formData.forEach((value, key) => {
        if(key === 'serviceArea'){ // Handle checkbox array
          if(!data.serviceArea) data.serviceArea = [];
          data.serviceArea.push(value);
        } else {
          data[key] = value;
        }
      });
      
      // Convert array to comma-separated string
      if(data.serviceArea && Array.isArray(data.serviceArea)){
        data.serviceArea = data.serviceArea.join(', ');
      }
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      statusEl.textContent = '';
      
      try {
        const response = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if(response.ok){
          statusEl.textContent = 'Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.';
          statusEl.style.color = '#27ae60';
          joinForm.reset();
          // Reset to step 1
          if(typeof showStep === 'function') showStep(1);
        } else {
          throw new Error(result.message || 'Error al enviar');
        }
      } catch(error) {
        statusEl.textContent = 'Hubo un error. Por favor intenta de nuevo o cont�ctanos directamente.';
        statusEl.style.color = '#e74c3c';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Solicitud';
      }
    });
  }
