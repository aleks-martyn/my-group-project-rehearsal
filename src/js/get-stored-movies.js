import { moviesEl, headerWatchedBtnEl, headerQueueBtnEl } from './ref-index';
import getSelectedList from './get-selected-list';
import renderGallery from './render-gallery';
import { load } from './local-storage-functions';
import { WATCHED_MOVIES, QUEUE_MOVIES } from './constants';

async function getStoredMovies() {
  headerQueueBtnEl.classList.add('lib-btn--current');

  const storedMovies = load(QUEUE_MOVIES) ?? [];

  headerWatchedBtnEl.addEventListener('click', () =>
    getSelectedList(headerQueueBtnEl, headerWatchedBtnEl, WATCHED_MOVIES)
  );
  headerQueueBtnEl.addEventListener('click', () =>
    getSelectedList(headerWatchedBtnEl, headerQueueBtnEl, QUEUE_MOVIES)
  );

  try {
    const markup = await renderGallery(storedMovies);
    return (moviesEl.innerHTML = markup);
  } catch (error) {
    console.log(error.message);
  }
}

getStoredMovies();
