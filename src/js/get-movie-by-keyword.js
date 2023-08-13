import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { container } from './ref-index';
import { fetchMovieByKeyword } from './api';
import renderGallery from './render-gallery';
import { moviesEl, errorEl } from './ref-index';
import setScrollToUp from './set-scroll';

export default async function getMovieByKeyword(searchQuery, pageNumber) {
  try {
    const { results, total_results } = await fetchMovieByKeyword(
      searchQuery,
      pageNumber
    );

    if (results.length === 0) {
      errorEl.style.display = 'block';
      return;
    }

    const pagination = new Pagination(container, {
      totalItems: total_results,
      itemsPerPage: 20,
      visiblePages: 5,
      centerAlign: true,
    });

    pagination.on('afterMove', async event => {
      setScrollToUp();
      const currentPage = event.page;
      const { results } = await fetchMovieByKeyword(searchQuery, currentPage);
      const res = await renderGallery(results);
      return (moviesEl.innerHTML = res);
    });

    const res = await renderGallery(results);
    return (moviesEl.innerHTML = res);
  } catch (error) {
    console.log(error.message);
  }
}
