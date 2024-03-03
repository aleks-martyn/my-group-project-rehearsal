import { bodyEl } from './ref-index';
import { load } from './local-storage-functions';
import { THEME } from './constants';

const check = document.querySelector('.check__input');
const sunIconEl = document.querySelector('.check__icon-sun');
const moonIconEl = document.querySelector('.check__icon-moon');
const labelEl = document.querySelector('.check__label');

const changeTheme = () => {
  console.log('Loading Theme');
  const theme = load(THEME);

  if (theme !== 'dark') {
    console.log('dark');
    bodyEl.classList.add('dark-theme');
  } else {
    return;
  }
};
changeTheme();

check.addEventListener('change', handleCheckBoxClick);

let summ = 0;
function handleCheckBoxClick() {
  summ += 1;

  if (summ % 2 === 1) {
   console.log('theme', 'dark');
  }

  if (summ % 2 === 0) {
    console.log('theme', 'light');
  }

  console.log('Checkbox click');
}
