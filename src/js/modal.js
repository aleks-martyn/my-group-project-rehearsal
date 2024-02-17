import * as basicLightbox from 'basiclightbox';
import { moviesEl, bodyEl } from './ref-index';
import getMovieById from './get-movie-by-id';
import getTrailer from './get-trailer';
import {
  load,
  checkMovieIsStored,
  handleModalBtnClick,
} from './local-storage-functions';
import { changeBtnText } from './change-btn-text';
import { WATCHED_MOVIES, QUEUE_MOVIES, WATCHED, QUEUE } from './constants';

moviesEl.addEventListener('click', handleMovieClick);

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
    closeBtnEl.addEventListener('click', handleCloseBtnClick);
    playBtnEl.addEventListener('click', handlePlayBtnClick);
    watchedBtnEl.addEventListener('click', () =>
      handleModalBtnClick(watchedParams)
    );
    queueBtnEl.addEventListener('click', () =>
      handleModalBtnClick(queueParams)
    );
    bodyEl.classList.add('no-scroll');

    async function handlePlayBtnClick(event) {
      const movieId = event.target.dataset.mvid;

      if (!movieId) return;

      const trailer = await getTrailer(movieId);
      const trailerInstanse = basicLightbox.create(trailer);
      trailerInstanse.show();
    }

    function handleCloseBtnClick() {
      modalInstance.close();
    }
  });
}
