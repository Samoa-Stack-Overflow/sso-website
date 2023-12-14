export const scrollIntoView = ({ target }) => {
  const el = document.querySelector(target.getAttribute('href'));
  if (!el) return;
  el.scrollIntoView({
    behavior: 'smooth'
  });
}
