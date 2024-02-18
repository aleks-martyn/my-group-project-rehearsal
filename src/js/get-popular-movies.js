import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { fetchPopularMovies } from './api';
import renderGallery from './render-gallery';
import { moviesEl } from './ref-index';
import { container } from './ref-index';
import setScrollToUp from './set-scroll';

async function getPopularMovies() {
  try {
    const { results, total_results } = await fetchPopularMovies();

    const pagination = new Pagination(container, {
      totalItems: total_results,
      itemsPerPage: 20,
      visiblePages: 5,
      centerAlign: true,
    });

    pagination.on('afterMove', async event => {
      setScrollToUp();
      const currentPage = event.page;
      const { results } = await fetchPopularMovies(currentPage);
      const markup = await renderGallery(results);
      return (moviesEl.innerHTML = markup);
    });

    const markup = await renderGallery(results);
    return (moviesEl.innerHTML = markup);
  } catch (error) {
    console.log(error.message);
  }
}

getPopularMovies();
