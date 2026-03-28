document.addEventListener('DOMContentLoaded', () => {
  const yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());
});
