document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.icon-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const icon = button.querySelector('i');
      if (icon.classList.contains('fa-shopping-basket')) {
        icon.classList.remove('fa-shopping-basket');
        icon.classList.add('fa-check');
      } else {
        icon.classList.remove('fa-check');
        icon.classList.add('fa-shopping-basket');
      }
    });
  });
});
