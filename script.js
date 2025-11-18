// Mobile nav toggle - append to end of script.js

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return;

  // Toggle navigation
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('is-active');

    const spans = hamburger.querySelectorAll('span');

    if (hamburger.classList.contains('is-active')) {
      spans[0].style.transform = 'translateY(8px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', function (e) {
    if (!navLinks.classList.contains('open')) return;

    if (hamburger.contains(e.target) || navLinks.contains(e.target)) return;

    navLinks.classList.remove('open');
    hamburger.classList.remove('is-active');

    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});