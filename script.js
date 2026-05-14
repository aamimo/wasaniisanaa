// Year
document.getElementById('yr').textContent = new Date().getFullYear();

// Nav scroll
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30));

// Burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll-spy
const sections = [...document.querySelectorAll('section[id]')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => spy.observe(s));

// Reveal on scroll
document.querySelectorAll('.section, .card, .prog, .timeline li, .stat, .g').forEach(el => el.classList.add('reveal'));
const rev = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => rev.observe(el));

// Count-up
const counters = document.querySelectorAll('.num[data-count]');
const co = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const dur = 1400;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(eased * target);
      el.textContent = val.toLocaleString() + (target >= 1000 ? '+' : '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    co.unobserve(el);
  });
}, { threshold: 0.4 });
counters.forEach(c => co.observe(c));

// Contact form -> mailto
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value, email = f.email.value, msg = f.message.value;
  const body = encodeURIComponent(`From: ${name} <${email}>\n\n${msg}`);
  location.href = `mailto:wasaniisanaa@gmail.com?subject=${encodeURIComponent('Partnership inquiry from ' + name)}&body=${body}`;
});
