document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');

  // Размер шрифта
  document.querySelectorAll('.font-size').forEach(control => {
    control.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.font-size').forEach(c => c.classList.remove('font-size_active'));
      control.classList.add('font-size_active');

      book.classList.remove('book_fs-small', 'book_fs-big');
      const size = control.dataset.size;
      if (size) book.classList.add(`book_fs-${size}`);
    });
  });

  // Цвет текста
  document.querySelectorAll('[data-text-color]').forEach(control => {
    control.addEventListener('click', e => {
      e.preventDefault();
      control.closest('.book__control_color').querySelectorAll('.color').forEach(c => c.classList.remove('color_active'));
      control.classList.add('color_active');

      book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
      const color = control.dataset.textColor;
      book.classList.add(`book_color-${color}`);
    });
  });

  // Цвет фона
  document.querySelectorAll('[data-bg-color]').forEach(control => {
    control.addEventListener('click', e => {
      e.preventDefault();
      control.closest('.book__control_background').querySelectorAll('.color').forEach(c => c.classList.remove('color_active'));
      control.classList.add('color_active');

      book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
      const color = control.dataset.bgColor;
      book.classList.add(`book_bg-${color}`);
    });
  });
});
