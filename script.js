// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Cursor sparkle trail — playful, throttled, and off for
// reduced-motion or touch-only devices.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = window.matchMedia('(hover: none)').matches;
const marks = ['✦', '★', '⚡', '✧'];

if (!prefersReducedMotion && !isTouchDevice) {
  let lastSpark = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSpark < 90) return; // throttle
    lastSpark = now;

    const el = document.createElement('span');
    el.className = 'sparkle';
    el.textContent = marks[Math.floor(Math.random() * marks.length)];
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 700);
  });
}
