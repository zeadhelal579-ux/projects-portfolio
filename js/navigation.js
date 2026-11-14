// Keeps the mobile navigation and its disclosure button in sync.
(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.getElementById(toggle.getAttribute('aria-controls'));

  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });

  toggle.closest('header').addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
})();
