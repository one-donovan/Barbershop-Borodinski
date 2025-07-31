/* в этот файл добавляет скрипты*/
const button = document.querySelector('.navigation__button-bag');
const popover = document.querySelector('.popover');

// Навешиваем на кнопку обработчик клика

/* button.onclick = function (evt) {
  // Отменяем переход по ссылке

  evt.preventDefault();
  // показываем поповер

  popover.style.display = 'block';

}; */

function openPopover() {
  popover.style.display = 'block';

  document.addEventListener('keydown', handleEscape);
}

function closePopover() {
  popover.style.display = 'none';
  document.removeEventListener('keydown', handleEscape);
}

function handleEscape(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
    closePopover();
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  openPopover();
});

// Можно закрывать поповер при клике вне его
document.addEventListener('click', (event) => {
  if (!popover.contains(event.target) && event.target !== button && popover.style.display === 'block') {
    closePopover();
  }
});


