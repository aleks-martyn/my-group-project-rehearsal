import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import getPopularMovies from './get-popular-movies';
import { container } from './ref-index';
import setScrollToUp from './set-scroll';

let page = 1;

getPopularMovies(page);

const pagination = new Pagination(container, {
  totalItems: 10000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
});

container.addEventListener('click', handleTuiContainerClick);

async function handleTuiContainerClick(event) {
  page = pagination.getCurrentPage();
  setScrollToUp();

  await getPopularMovies(page);
}
