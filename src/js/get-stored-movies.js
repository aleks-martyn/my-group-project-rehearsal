import { moviesEl, headerWatchedBtnEl, headerQueueBtnEl } from './ref-index';
import getSelectedList from './get-selected-list';
import renderGallery from './render-gallery';
import { load } from './local-storage-functions';
import { WATCHED_MOVIES, QUEUE_MOVIES } from './constants';
import createPagination from './create-pagination';
import getCurrentPageMovies from './get-current-page-movies';
import setScrollToUp from './set-scroll';

async function getStoredMovies() {
  headerQueueBtnEl.classList.add('lib-btn--current');

  headerWatchedBtnEl.addEventListener('click', () =>
    getSelectedList(headerQueueBtnEl, headerWatchedBtnEl, WATCHED_MOVIES)
  );
  headerQueueBtnEl.addEventListener('click', () =>
    getSelectedList(headerWatchedBtnEl, headerQueueBtnEl, QUEUE_MOVIES)
  );

  const storedMovies = load(QUEUE_MOVIES) ?? [];
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

getStoredMovies();
