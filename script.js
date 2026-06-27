cat > /mnt/user-data/outputs/pandit-guruji/script.js << 'JSEOF'
// ── FLAME PARTICLES ──
const flameContainer = document.getElementById('flames');
const flameColors = ['#F5A623','#E8610A','#FFD580','#C94073','#FF8C00','#FFAA33'];
for (let i = 0; i < 48; i++) {
  const f = document.createElement('div');
  f.className = 'flame';
  const size = 4 + Math.random() * 9;
  f.style.cssText = `
    left:${Math.random()*100}%;
    width:${size}px;
    height:${size*(2+Math.random()*3.5)}px;
    background:${flameColors[Math.floor(Math.random()*flameColors.length)]};
    animation-duration:${1.4+Math.random()*2.8}s;
    animation-delay:${Math.random()*3.5}s;
  `;
  flameContainer.appendChild(f);
}

// ── COUNTER ANIMATION ──
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const raw = el.textContent;
    const num = parseInt(raw.replace(/\D/g, ''));
    const suffix = raw.replace(/[\d]/g, '');
    if (isNaN(num)) return;
    let current = 0;
    const step = num / 70;
    const timer = setInterval(() => {
      current = Math.min(current + step, num);
      el.textContent = Math.round(current) + suffix;
      if (current >= num) clearInterval(timer);
    }, 14);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(
  '.service-card, .testi-card, .pandit-card, .why-item, .contact-item, .pricing-card, .tl-item'
);
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const idx = Array.from(revealEls).indexOf(entry.target) % 4;
    setTimeout(() => {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }, idx * 90);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1 });
revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  revealObserver.observe(el);
});

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-q').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    // Toggle clicked
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// ── NAVBAR SHRINK ON SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.height = '56px';
    nav.style.background = 'rgba(30,15,4,0.98)';
  } else {
    nav.style.height = '68px';
    nav.style.background = 'rgba(30,15,4,0.95)';
  }
});

// ── NEWSLETTER FORM ──
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = newsletterForm.querySelector('button');
    btn.textContent = '✓ Subscribed!';
    btn.style.background = '#2ecc71';
    setTimeout(() => {
      btn.textContent = 'Join';
      btn.style.background = '';
      newsletterForm.reset();
    }, 3000);
  });
}

// ── BOOKING FORM ──
const bookingBtn = document.querySelector('.btn-book');
if (bookingBtn) {
  bookingBtn.addEventListener('click', () => {
    bookingBtn.textContent = '🙏 Booking Confirmed!';
    bookingBtn.style.background = 'linear-gradient(135deg,#2ecc71,#27ae60)';
    setTimeout(() => {
      bookingBtn.textContent = '🕉️  Confirm My Booking';
      bookingBtn.style.background = '';
    }, 3500);
  });
}
JSEOF
echo "JS done"
