// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
  });

  // script.js
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');

  burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
