import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { fetchMovieByKeyword } from './api';
import {
  searchFormEl,
  inputEl,
  errorEl,
  moviesEl,
  container,
} from './ref-index';
import renderGallery from './render-gallery';
import setScrollToUp from './set-scroll';

searchFormEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const query = inputEl.value;
  let page = 1;

  fetchMovieByKeyword(query, page)
    .then(data => {
      const { page, results, total_pages, total_results } = data;
      return renderGallery(results);
    })
    .then(async res => {
      return (moviesEl.innerHTML = res);
    })
    .catch(console.log);
}
