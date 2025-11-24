// Main interaction logic for Inoa & Melenciano Services
// Features: dark mode toggle, mobile nav, contact form, scroll effects, back-to-top
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
  backToTop.style.cssText = 'position:fixed;bottom:2rem;right:2rem;width:50px;height:50px;background:var(--gold);color:#000;border:none;border-radius:50%;font-size:1.5rem;cursor:pointer;opacity:0;visibility:hidden;transition:all 0.3s;box-shadow:var(--shadow);z-index:60;display:flex;align-items:center;justify-content:center;';
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
  
  // Apply animation to cards
  document.querySelectorAll('.metric-card, .service-card, .value-item').forEach(el => {
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
      
      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      if(submitBtn){
        submitBtn.disabled = true;
        submitBtn.innerHTML = (dict['status.sending'] || 'Sending') + ' <span style="display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin 0.8s linear infinite;margin-left:.5rem;vertical-align:middle;"></span>';
      }
      statusEl.textContent = '';
      statusEl.className = 'status';
      
      const fd = new FormData(contactForm);
      const payload = Object.fromEntries(fd.entries());
      
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
