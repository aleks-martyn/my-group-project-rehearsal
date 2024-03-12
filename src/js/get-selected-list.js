import { moviesEl } from './ref-index';
import { load } from './local-storage-functions';
import renderGallery from './render-gallery';
import createPagination from './create-pagination';
import getCurrentPageMovies from './get-current-page-movies';
import setScrollToUp from './set-scroll';

export default async function getSelectedList(firstEl, secondEl, key) {
  firstEl.classList.remove('lib-btn--current');
  secondEl.classList.add('lib-btn--current');

  const storedMovies = load(key) ?? [];
  const movieQuantity = storedMovies.length;
  const moviesPerPage = 4;

  const visiblePages = 3;

  if (movieQuantity > 0) {
    const visibleMovies = getCurrentPageMovies(storedMovies, moviesPerPage);

    const pagination = createPagination(
      movieQuantity,
      moviesPerPage,
      visiblePages
    );

    try {
      pagination.on('afterMove', async event => {
        setScrollToUp();
        const currentPage = event.page;
        const visibleMovies = getCurrentPageMovies(
          storedMovies,
          moviesPerPage,
          currentPage
        );

        const markup = await renderGallery(visibleMovies);
        return (moviesEl.innerHTML = markup);
      });

      const markup = await renderGallery(visibleMovies);
      return (moviesEl.innerHTML = markup);
    } catch (error) {
      console.log(error.message);
    }
  }
}
