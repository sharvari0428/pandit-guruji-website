// ── FLAME PARTICLES ──
const container = document.getElementById('flames');
const colors = ['#F5A623', '#E8610A', '#FFD580', '#C94073', '#FF8C00'];

for (let i = 0; i < 40; i++) {
  const f = document.createElement('div');
  f.className = 'flame';
  const size = 4 + Math.random() * 8;
  f.style.cssText = `
    left:${Math.random() * 100}%;
    width:${size}px;
    height:${size * (2 + Math.random() * 3)}px;
    background:${colors[Math.floor(Math.random() * colors.length)]};
    animation-duration:${1.5 + Math.random() * 2.5}s;
    animation-delay:${Math.random() * 3}s;
  `;
  container.appendChild(f);
}

// ── STATS COUNTER ANIMATION ──
const stats = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const raw = el.textContent;
      const num = parseInt(raw.replace(/\D/g, ''));
      const suffix = raw.replace(/[\d]/g, '');
      if (isNaN(num)) return;
      let current = 0;
      const step = num / 60;
      const timer = setInterval(() => {
        current = Math.min(current + step, num);
        el.textContent = Math.round(current) + suffix;
        if (current >= num) clearInterval(timer);
      }, 16);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

stats.forEach(s => counterObserver.observe(s));

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.service-card, .testi-card, .pandit-card, .why-item, .contact-item');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const index = Array.from(reveals).indexOf(e.target) % 4;
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, 80 * index);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(r => {
  r.style.opacity = '0';
  r.style.transform = 'translateY(28px)';
  r.style.transition = 'opacity .55s ease, transform .55s ease';
  revealObserver.observe(r);
});
