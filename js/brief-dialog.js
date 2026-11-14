// Opens and closes the native technical brief dialog.
(() => {
  for (const button of document.querySelectorAll('[data-modal-open]')) {
    button.addEventListener('click', () => {
      const dialog = document.getElementById(button.dataset.modalOpen);
      if (dialog && !dialog.open) dialog.showModal();
    });
  }

  for (const button of document.querySelectorAll('[data-modal-close]')) {
    button.addEventListener('click', () => {
      button.closest('dialog').close();
    });
  }
})();
