// Marks the current case-study section in the navigation.
(() => {
  if (!('IntersectionObserver' in window)) return;

  const links = document.querySelectorAll('#main-nav a');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === '#' + entry.target.id) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      }
    }
  }, { rootMargin: '-35% 0px -50% 0px' });

  for (const link of links) {
    const section = document.getElementById(link.hash.slice(1));
    if (section) observer.observe(section);
  }
})();
