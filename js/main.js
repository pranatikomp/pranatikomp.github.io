/* ================================================================
   main.js — Pranati Kompella portfolio
   ================================================================ */

(function () {
  'use strict';

  /* ── Mobile nav toggle ─────────────────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close drawer when a link inside it is clicked
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close drawer when clicking outside
    document.addEventListener('click', e => {
      if (
        drawer.classList.contains('open') &&
        !drawer.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        drawer.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Active nav link ───────────────────────────────────────── */
  const currentPath = window.location.pathname
    .replace(/\/index\.html$/, '/')   // normalise /index.html → /
    .replace(/\/$/, '') || '/';        // strip trailing slash (but keep root)

  const allNavLinks = document.querySelectorAll('.nav-link, .nav-drawer a');

  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalise link href the same way
    const linkPath = href
      .split('?')[0]   // drop query string
      .split('#')[0]   // drop hash
      .replace(/\/index\.html$/, '/')
      .replace(/\/$/, '') || '/';

    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  /* ── Smooth reveal on scroll (Intersection Observer) ───────── */
  const revealEls = document.querySelectorAll('.project-card, .cs-section, .pub-item');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el, i) => {
      el.classList.add('will-reveal');
      // Stagger cards within each row (2-col grid: 0ms / 100ms alternating)
      if (el.classList.contains('project-card')) {
        el.style.transitionDelay = `${(i % 2) * 100}ms`;
      }
      observer.observe(el);
    });
  }

})();
