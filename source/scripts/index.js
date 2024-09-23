/* в этот файл добавляет скрипты*/
const navButton = document.querySelector('.header__nav-button');
const navSection = document.querySelector('.header__nav');

function onClicked() {
  if (navButton.classList.contains('header__nav-button--open')) {
    navSection.classList.remove('visually-hidden');
    navButton.classList.add('header__nav-button--close');
    navButton.classList.remove('header__nav-button--open');
  } else {
    navSection.classList.add('visually-hidden');
    navButton.classList.remove('header__nav-button--close');
    navButton.classList.add('header__nav-button--open');
  }
}

navButton.addEventListener('click', onClicked);
