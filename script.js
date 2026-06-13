/* ========================================================================== 
   ASCENT Student Research Forum 2026
   Main JavaScript

   This file contains only interactive behavior.
   Keep page content in index.html and visual design in style.css.
   ========================================================================== */

(function () {
  const sidebar = document.querySelector('#sidebar');
  const menuToggle = document.querySelector('#menuToggle');
  const navLinks = document.querySelectorAll('.side-nav a[href^="#"]');
  const heroHome = document.querySelector('.hero-home');

  /* Mobile sidebar menu ---------------------------------------------------- */

  function closeMenu() {
    if (!sidebar || !menuToggle) return;

    sidebar.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  }

  function toggleMenu() {
    if (!sidebar || !menuToggle) return;

    const isOpen = sidebar.classList.toggle('open');
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  /* Active navigation highlight ------------------------------------------- */

  const sectionIds = Array.from(navLinks)
    .map((link) => link.getAttribute('href'))
    .filter((href) => href && href.startsWith('#'))
    .map((href) => href.slice(1));

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, {
      rootMargin: '-35% 0px -55% 0px',
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
  }

  /* Gentle hero parallax effect ------------------------------------------- */

  if (heroHome && window.matchMedia('(pointer: fine)').matches) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let ticking = false;

    function animateHero() {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;

      heroHome.style.setProperty('--move-x', `${currentX.toFixed(2)}px`);
      heroHome.style.setProperty('--move-y', `${currentY.toFixed(2)}px`);

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        requestAnimationFrame(animateHero);
      } else {
        ticking = false;
      }
    }

    function startHeroAnimation() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(animateHero);
      }
    }

    heroHome.addEventListener('mousemove', (event) => {
      const rect = heroHome.getBoundingClientRect();
      const xRatio = (event.clientX - rect.left) / rect.width;
      const yRatio = (event.clientY - rect.top) / rect.height;

      targetX = (xRatio - 0.5) * -20;
      targetY = (yRatio - 0.5) * -14;

      heroHome.style.setProperty('--spot-x', `${(xRatio * 100).toFixed(1)}%`);
      heroHome.style.setProperty('--spot-y', `${(yRatio * 100).toFixed(1)}%`);

      startHeroAnimation();
    });

    heroHome.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      heroHome.style.setProperty('--spot-x', '32%');
      heroHome.style.setProperty('--spot-y', '38%');

      startHeroAnimation();
    });
  }
}());
