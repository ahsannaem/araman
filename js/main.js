(function () {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Trigger counter animation if present
          const counters = entry.target.querySelectorAll('.stat-number');
          counters.forEach(animateCounter);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));

  // Apple-like number counter animation (impressive pop at end)
  function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';

    const target = parseFloat(el.textContent.replace(/[^0-9.]/g, '')) || 0;
    const suffix = el.textContent.replace(/[0-9.]/g, '');
    const duration = 1600;
    const start = performance.now();
    const startVal = 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Strong ease-out with slight overshoot for pop
      const eased = 1 - Math.pow(1 - progress, 4);
      let current = Math.floor(startVal + (target - startVal) * eased);
      if (progress > 0.92) current = target; // lock at end
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
        // Impressive final pop
        el.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        el.style.transform = 'scale(1.08)';
        setTimeout(() => {
          el.style.transform = 'scale(1)';
          setTimeout(() => {
            el.style.transition = '';
          }, 300);
        }, 150);
      }
    }
    requestAnimationFrame(update);
  }

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('mobile-open');
    });

    // Close mobile menu when tapping any navigation link inside it.
    mobileMenu.querySelectorAll('a').forEach((el) => {
      el.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('mobile-open');
      });
    });
  }

  // Desktop nav: mark any dropdown whose link is the current page (active).
  // CSS then prevents the dropdown menu from showing on hover/focus (better UX on current page)
  // while keeping identical DOM + layout across all pages for design consistency.
  document.querySelectorAll('.nav-dropdown').forEach((dd) => {
    const link = dd.querySelector('.nav-link');
    if (link && link.classList.contains('active')) {
      dd.classList.add('current');
    }
  });

  const mobileServicesBtn = document.getElementById('mobile-services-btn');
  const mobileServicesSub = document.getElementById('mobile-services-sub');

  if (mobileServicesBtn && mobileServicesSub) {
    if (mobileServicesBtn.classList.contains('active')) {
      // On services page: disable the submenu entirely (no hover/click expand).
      // Clicking the label just closes the mobile drawer (consistent with other nav items).
      mobileServicesBtn.classList.add('current');
      mobileServicesSub.classList.add('current');
      mobileServicesSub.classList.remove('open');
      mobileServicesBtn.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.add('hidden');
      });
    } else {
      mobileServicesBtn.addEventListener('click', () => {
        mobileServicesSub.classList.toggle('open');
      });
    }
  }

  // Apple-like subtle nav compact on scroll (adds premium smooth feel)
  const nav = document.querySelector('nav');
  if (nav) {
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.classList.add('nav-compact');
      } else {
        nav.classList.remove('nav-compact');
      }
      lastScrollY = window.scrollY;
    }, { passive: true });
  }

  // Impressive 3D tilt on premium cards (Apple hardware feel) - desktop only
  // Skip cards with .no-animate class (e.g. on calculator page)
  if (window.innerWidth > 768) {
    document.querySelectorAll('.premium-card:not(.no-animate)').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) - 0.5;
        const y = ((e.clientY - rect.top) / rect.height) - 0.5;
        const rotX = y * -12; // subtle
        const rotY = x * 12;
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.01)`;
        card.style.transition = 'transform 0.1s linear';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        card.style.transform = '';
      });
    });
  }
})();
