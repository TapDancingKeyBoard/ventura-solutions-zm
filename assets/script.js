// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Reveal on scroll
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('in'));
}

// Footer year
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// Contact form: compose an email to the office.
const form = document.querySelector('#enquiry');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = `Website enquiry – ${d.get('name')}`;
    const body = [
      `Name: ${d.get('name')}`,
      `Phone: ${d.get('phone')}`,
      `Email: ${d.get('email')}`,
      d.get('company') ? `Company: ${d.get('company')}` : null,
      '',
      d.get('message'),
    ].filter((l) => l !== null).join('\n');
    location.href = `mailto:enquiries@venturasolutionszm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
