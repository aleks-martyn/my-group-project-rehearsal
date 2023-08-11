import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { fetchPopularMovies } from './api';
import { moviesEl, container } from './ref-index';
import renderGallery from './render-gallery';
import setScrollToUp from './set-scroll';

const pagination = new Pagination(container, {
  totalItems: 10000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
});

let page = 1;

fetchPopularMovies(page)
  .then(data => {
    const { page, results, total_pages, total_results } = data;
    return renderGallery(results);
  })
  .then(async res => {
    return (moviesEl.innerHTML = res);
  })
  .catch(console.log);

container.addEventListener('click', handleTuiContainerClick);

function handleTuiContainerClick(event) {
  page = pagination.getCurrentPage();
  setScrollToUp();

  fetchPopularMovies(page)
    .then(data => {
      const { page, results, total_pages, total_results } = data;

      return renderGallery(results);
    })
    .then(res => {
      return (moviesEl.innerHTML = res);
    })
    .catch(console.log);
}
