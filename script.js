document.addEventListener("DOMContentLoaded", function() {
  const basketButton = document.getElementById('basketButton');

  basketButton.addEventListener('click', function() {
    const icon = this.querySelector('i');
    
    if (icon.classList.contains('fa-shopping-basket')) {
      icon.classList.remove('fa-shopping-basket');
      icon.classList.add('fa-check');
    } else {
      icon.classList.remove('fa-check');
      icon.classList.add('fa-shopping-basket');
    }
  });
});