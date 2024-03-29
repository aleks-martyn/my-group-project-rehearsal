import * as basicLightbox from 'basiclightbox';
import {
  moviesEl,
  bodyEl,
  homeBtnEl,
  headerWatchedBtnEl,
  headerQueueBtnEl,
} from './ref-index';
import getMovieById from './get-movie-by-id';
import getTrailer from './get-trailer';
import { load, checkMovieIsStored } from './local-storage-functions';
import { changeBtnText } from './change-btn-text';
import { WATCHED_MOVIES, QUEUE_MOVIES, WATCHED, QUEUE } from './constants';
import handleModalBtnClick from './handle-modal-btn-click';

moviesEl.addEventListener('click', handleMovieClick);

const hasActiveClass = homeBtnEl.classList.contains('nav__link--current');

async function handleMovieClick(event) {
  const movieId = Number(event.target.dataset?.mvid);

  if (!movieId) return;

  const movie = await getMovieById(movieId);

  const storedWatchedMovies = load(WATCHED_MOVIES) ?? [];
  const isStoredWatchedMovie = checkMovieIsStored(storedWatchedMovies, movieId);

  const storedQueueMovies = load(QUEUE_MOVIES) ?? [];
  const isStoredQueueMovie = checkMovieIsStored(storedQueueMovies, movieId);

  const modalInstance = basicLightbox.create(movie, {
    onClose: () => {
      bodyEl.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeydownClick);
    },
  });

  function handleKeydownClick(event) {
    if (event.key === 'Escape') {
      modalInstance.close();
    }
  }

  modalInstance.show(() => {
    const closeBtnEl = document.querySelector('.modal__close');
    const playBtnEl = document.querySelector('.modal__play');
    const watchedBtnEl = document.querySelector('.modal__btn--watched');
    const queueBtnEl = document.querySelector('.modal__btn--queue');

    watchedBtnEl.textContent = changeBtnText(isStoredWatchedMovie, WATCHED);
    queueBtnEl.textContent = changeBtnText(isStoredQueueMovie, QUEUE);

    if (isStoredWatchedMovie) {
      watchedBtnEl.classList.add('modal__btn--added');
    }

    if (isStoredQueueMovie) {
      queueBtnEl.classList.add('modal__btn--added');
    }

    const watchedParams = {
      key: WATCHED_MOVIES,
      id: movieId,
      el: watchedBtnEl,
      listName: WATCHED,
    };

    const queueParams = {
      key: QUEUE_MOVIES,
      id: movieId,
      el: queueBtnEl,
      listName: QUEUE,
    };

    document.addEventListener('keydown', handleKeydownClick);
    closeBtnEl.addEventListener('click', () => modalInstance.close());
    playBtnEl.addEventListener('click', handlePlayBtnClick);
    watchedBtnEl.addEventListener('click', () =>
      handleModalBtnClick(hasActiveClass, headerWatchedBtnEl, watchedParams)
    );
    queueBtnEl.addEventListener('click', () =>
      handleModalBtnClick(hasActiveClass, headerQueueBtnEl, queueParams)
    );
    bodyEl.classList.add('no-scroll');

    async function handlePlayBtnClick(event) {
      const movieId = event.target.dataset.mvid;

      if (!movieId) return;

      const trailer = await getTrailer(movieId);
      const trailerInstanse = basicLightbox.create(trailer, {
        className: 'basicLightbox--trailer',
      });

      trailerInstanse.show(() => {
        const closeBtnTrailerEl = document.querySelector(
          '.modal__close--trailer'
        );

        closeBtnTrailerEl.addEventListener('click', () =>
          trailerInstanse.close()
        );
      });
    }
  });
}
