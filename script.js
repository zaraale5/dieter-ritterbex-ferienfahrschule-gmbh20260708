// Toggle mobile main navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle && navToggle.addEventListener('click', function() {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('active');
});
// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      navMenu && navMenu.classList.remove('active');
      navToggle && navToggle.setAttribute('aria-expanded','false');
    }
  });
});
// Contact form fake submit for demo
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Vielen Dank für deine Nachricht! Wir melden uns schnellstmöglich zurück.');
    contactForm.reset();
  });
}
