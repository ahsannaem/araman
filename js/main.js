(function () {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when tapping any navigation link inside it.
    // (Current-page Services button gets its own close handler below when active.)
    mobileMenu.querySelectorAll('a').forEach((el) => {
      el.addEventListener('click', () => mobileMenu.classList.add('hidden'));
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
})();
