// FAQ accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  // Ferme tous les items ouverts
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  // Ouvre celui cliqué si il était fermé
  if (!isOpen) item.classList.add('open');
}

// Menu burger mobile
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const isVisible = links.style.display === 'flex';
  links.style.display = isVisible ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '70px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = 'rgba(15,23,42,0.98)';
  links.style.padding = '1.5rem 6%';
  links.style.gap = '1.2rem';
}