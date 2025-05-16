function isVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  return rect.top < windowHeight && rect.bottom > 0;
}

function checkVisibility() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    if (isVisible(el)) {
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);