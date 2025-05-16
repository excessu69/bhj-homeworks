// Получаем все элементы с классом dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const value = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const items = dropdown.querySelectorAll('.dropdown__item');

  // Обработчик для открытия/закрытия списка
  value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
  });

  // Обработчики для выбора пунктов меню
  items.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Запрещаем переход по ссылке

      const selectedText = item.textContent.trim();
      value.textContent = selectedText;

      list.classList.remove('dropdown__list_active');
    });
  });
});
