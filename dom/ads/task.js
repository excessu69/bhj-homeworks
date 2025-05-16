document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let index = 0;

    function rotate() {
      cases[index].classList.remove('rotator__case_active');

      index = (index + 1) % cases.length;

      const nextCase = cases[index];
      nextCase.classList.add('rotator__case_active');
      nextCase.style.color = nextCase.dataset.color || 'black';

      const speed = parseInt(nextCase.dataset.speed) || 1000;

      setTimeout(rotate, speed);
    }

    const first = cases[0];
    first.style.color = first.dataset.color || 'black';
    const initialSpeed = parseInt(first.dataset.speed) || 1000;
    setTimeout(rotate, initialSpeed);
  });
});
