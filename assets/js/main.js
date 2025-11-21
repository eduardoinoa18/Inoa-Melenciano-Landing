// Main interaction logic for Inoa & Melenciano Services
// Features: dark mode toggle, mobile nav, lead form submit enhancement, footer year
(function(){
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleFooter = document.getElementById('themeToggleFooter');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const leadForm = document.getElementById('leadForm');
  const statusEl = document.getElementById('formStatus');
  const yearEl = document.getElementById('year');

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
    const label = light ? '🌙 Dark' : '☀️ Light';
    if(themeToggle) themeToggle.textContent = label;
    if(themeToggleFooter) themeToggleFooter.textContent = label;
  }
  themeToggle && themeToggle.addEventListener('click', toggleTheme);
  themeToggleFooter && themeToggleFooter.addEventListener('click', toggleTheme);

  // Mobile navigation toggle
  if(navToggle && navLinks){
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Close nav if clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if(navLinks && navLinks.classList.contains('open')){
      if(!navLinks.contains(e.target) && e.target !== navToggle){
        navLinks.classList.remove('open');
        navToggle && navToggle.setAttribute('aria-expanded','false');
      }
    }
  });

  // Lead form submit enhancement
  if(leadForm && statusEl){
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      statusEl.textContent = 'Sending...';
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
        statusEl.textContent = '✓ Received. We will contact you shortly.';
        leadForm.reset();
      } catch(err){
        statusEl.textContent = 'Error: ' + err.message;
      }
    });
  }
})();
