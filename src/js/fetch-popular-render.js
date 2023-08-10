import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { fetchPopularMovies } from './api';
import renderGallery from './render-gallery';
import setScrollToUp from './set-scroll';

const moviesEl = document.querySelector('.films');
const container = document.getElementById('tui-pagination-container');

const pagination = new Pagination(container, {
  totalItems: 10000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
});

let pageNumber = 1;

fetchPopularMovies(pageNumber)
  .then(data => {
    const { page, results, total_pages, total_results } = data;
    return renderGallery(results);
  })
  .then(async res => {
    // container.style.display = 'block';
    return (moviesEl.innerHTML = res);
  })
  .catch(console.log);

container.addEventListener('click', handleTuiContainerClick);

function handleTuiContainerClick(event) {
  pageNumber = pagination.getCurrentPage();
  setScrollToUp();

  fetchPopularMovies(pageNumber)
    .then(data => {
      const { page, results, total_pages, total_results } = data;

      return renderGallery(results);
    })
    .then(res => {
      return (moviesEl.innerHTML = res);
    })
    .catch(console.log);
}
