/* в этот файл добавляет скрипты*/
const button = document.querySelector('.navigation__button-bag');
const popover = document.querySelector('.popover');

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


// модальное окно
const popup = document.querySelector('.modal-container');
const openPopupButton = document.querySelector('.navigation-link-login');
const closePopupButton = popup.querySelector('.modal-close-button');

// Открытие модального окна
openPopupButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.add('show'); // показываем окно
});

// Закрытие модального окна
closePopupButton.addEventListener('click', () => {
  popup.classList.remove('show'); // скрываем окно
});

popup.addEventListener('click', (evt) => {
  if (evt.target === popup) {
    popup.classList.remove('show');
  }
});

