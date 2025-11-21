// Placeholder form handler; real implementation (store + email) later
const leadForm = document.getElementById('leadForm');
if(leadForm){
  leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById('formStatus');
    statusEl.textContent = 'Sending...';
    const formData = new FormData(leadForm);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if(res.ok){
        statusEl.textContent = 'Submitted (placeholder). We will reach out soon.';
        leadForm.reset();
      } else {
        statusEl.textContent = 'Submission error. Please try again later.';
      }
    } catch(err){
      statusEl.textContent = 'Network error.';
    }
  });
}
