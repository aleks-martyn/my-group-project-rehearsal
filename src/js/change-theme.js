import {
  bodyEl,
  labelEl,
  checkBoxEl,
  sunIconEl,
  moonIconEl,
} from './ref-index';
import { load, save } from './local-storage-functions';
import { THEME, DARK, LIGHT } from './constants';

let sum = 0;

function getStoredTheme() {
  const theme = load(THEME);

  if (theme === DARK) {
    sum = 1;
    changeTheme();
  } else {
    return;
  }
}

getStoredTheme();

checkBoxEl.addEventListener('change', handleCheckBoxClick);

function handleCheckBoxClick() {
  sum += 1;

  if (sum % 2 === 1) {
    save(THEME, DARK);
  }

  if (sum % 2 === 0) {
    save(THEME, LIGHT);
  }

  changeTheme();
}

function changeTheme() {
  bodyEl.classList.toggle('dark-theme');
  labelEl.classList.toggle('check__label--dark');
  sunIconEl.classList.toggle('check__icon-hidden');
  moonIconEl.classList.toggle('check__icon-hidden');
}
