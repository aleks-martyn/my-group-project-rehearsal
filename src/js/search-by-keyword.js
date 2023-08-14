import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import getMovieByKeyword from './get-movie-by-keyword';
import {
  searchFormEl,
  inputEl,
  errorEl,
  moviesEl,
  container,
} from './ref-index';
import setScrollToUp from './set-scroll';

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
  await getMovieByKeyword(query, page);
}
