import getMovieByKeyword from './get-movie-by-keyword';
import { searchFormEl, inputEl, errorEl } from './ref-index';

searchFormEl.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  const query = inputEl.value;
  let page = 1;

  if (inputEl.value.trim() === '') {
    errorEl.style.display = 'block';
    return;
  }

  if (inputEl.value.trim()) {
    errorEl.style.display = 'none';
  }
  getMovieByKeyword(query, page);
  inputEl.value = '';
}
