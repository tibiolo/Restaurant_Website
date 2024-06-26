document.addEventListener("DOMContentLoaded", () => {
  // Swiper initialization
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // Add to basket button functionality
  const buttons = document.querySelectorAll(".icon-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");
      if (icon.classList.contains("fa-shopping-basket")) {
        icon.classList.remove("fa-shopping-basket");
        icon.classList.add("fa-check");
      } else {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-shopping-basket");
      }
    });
  });

  // Scroll to menu button and smooth scroll animation

  const seeMenuButton = document.getElementById("seeMenuButton");
  const menuSection = document.getElementById("menuSection");

  seeMenuButton.addEventListener("click", function () {
    menuSection.scrollIntoView({ behavior: "smooth" });
  });

  // Fade in on scroll

  const elementsToFadeIn = document.querySelectorAll('.hidden');

    const fadeInOnScroll = () => {
      elementsToFadeIn.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementPosition < viewportHeight - 50) {
          element.classList.add('fade-in');
        } else {
          element.classList.remove('fade-in');
        }
      });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    
    // Trigger fade-in function on page load
    fadeInOnScroll();
});                   