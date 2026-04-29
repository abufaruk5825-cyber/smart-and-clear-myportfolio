/**
 * Premium Portfolio Features — Zero Delay, Instant Load
 */

// Theme toggle removed

// ── Scroll to Top — handled by main.js scroll-top element ──

// ── Animated Counters (IntersectionObserver, no delay) ──
function animateCounters() {
  document.querySelectorAll('.counter-number').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 80;
    let current = 0;
    const update = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + '+';
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + '+';
      }
    };
    update();
  });
}

const counterSection = document.querySelector('.counter-section');
if (counterSection) {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounters(); }
    });
  }, { threshold: 0.3 }).observe(counterSection);
}

// ── Typing Effect — instant, no setTimeout ─────────────
const typingElement = document.getElementById('typingName');
if (typingElement) {
  const text = typingElement.getAttribute('data-text') || typingElement.textContent;
  typingElement.textContent = text; // show immediately
}

// ── Skill Progress Bars ─────────────────────────────────
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-progress-bar').forEach(bar => bar.classList.add('animate'));
      }
    });
  }, { threshold: 0.2 }).observe(skillsSection);
}

// ── Fade-in on Scroll ───────────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ── Smooth Scroll for anchor links ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ── Make ALL sections visible immediately on load ───────
document.addEventListener('DOMContentLoaded', () => {
  // Force all sections visible — no waiting
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '1';
    section.style.visibility = 'visible';
    section.style.transform = 'none';
  });

  // Force all AOS elements visible immediately
  document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.transition = 'none';
  });
});

console.log('Portfolio Ready ⚡');
