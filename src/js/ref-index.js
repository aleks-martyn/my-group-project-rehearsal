const searchFormEl = document.querySelector('.nav__form');
const inputEl = document.querySelector('.nav__input');
const errorEl = document.querySelector('.header__error');
const moviesEl = document.querySelector('.movies');
const container = document.getElementById('tui-pagination-container');
const bodyEl = document.querySelector('body');
const homeBtnEl = document.querySelector('.nav__link--home');
const headerWatchedBtnEl = document.querySelector('.lib-btn--watched');
const headerQueueBtnEl = document.querySelector('.lib-btn--queue');
const labelEl = document.querySelector('.check__label');
const checkBoxEl = document.querySelector('.check__input');
const sunIconEl = document.querySelector('.check__icon-sun');
const moonIconEl = document.querySelector('.check__icon-moon');

export {
  searchFormEl,
  inputEl,
  errorEl,
  moviesEl,
  container,
  bodyEl,
  headerWatchedBtnEl,
  headerQueueBtnEl,
  homeBtnEl,
  labelEl,
  checkBoxEl,
  sunIconEl,
  moonIconEl,
};
