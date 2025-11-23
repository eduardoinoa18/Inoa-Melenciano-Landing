// Main interaction logic for Inoa & Melenciano Services
// Features: dark mode toggle, mobile nav, lead form submit enhancement, footer year, scroll animations
(function(){
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleFooter = document.getElementById('themeToggleFooter');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const leadForm = document.getElementById('leadForm');
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
    const label = light ? '🌙' : '☀️';
    if(themeToggle) themeToggle.textContent = label;
    if(themeToggleFooter) themeToggleFooter.textContent = label;
  }
  themeToggle && themeToggle.addEventListener('click', toggleTheme);
  themeToggleFooter && themeToggleFooter.addEventListener('click', toggleTheme);

  // Scroll header effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if(header){
      if(currentScroll > 50){
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    lastScroll = currentScroll;
  });

  // Mobile navigation toggle with dropdown support
  if(navToggle && navLinks){
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Handle dropdown clicks on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.dd-btn');
      if(btn){
        btn.addEventListener('click', (e) => {
          if(window.innerWidth <= 780){
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
        // Close all dropdowns
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
      }
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if(href !== '#' && href.length > 1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Lead form submit enhancement
  if(leadForm && statusEl){
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const lang = document.documentElement.lang || 'en';
      const dict = (typeof DICT !== 'undefined' && DICT[lang]) ? DICT[lang] : {};
      
      // Show loading state
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = dict['status.sending'] || 'Sending...';
      statusEl.textContent = '';
      
      const fd = new FormData(leadForm);
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
        statusEl.textContent = dict['status.success'] || '✓ Received. We will contact you shortly.';
        statusEl.style.color = 'var(--accent)';
        leadForm.reset();
        
        // Scroll to status message
        setTimeout(() => {
          statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } catch(err){
        statusEl.textContent = dict['status.error'] || '✗ Submission error. Please try again.';
        statusEl.style.color = '#ff6b6b';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // Intersection Observer for scroll animations
  if('IntersectionObserver' in window){
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.metric-card, .svc-card, .vp-item').forEach(el => {
      // Reset initial state for non-animated elements
      if(!el.style.opacity){
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      }
      observer.observe(el);
    });
  }

  // Add ripple effect to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
})();
