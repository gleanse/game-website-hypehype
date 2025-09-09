// MOBILE MENUE TOGGLE
const mobileMenu = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// SCROLLING  ANIMATION when you click the navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    navMenu.classList.remove('active');
  });
});

// NAVBAR OPACITY
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.9)';
  }
});
