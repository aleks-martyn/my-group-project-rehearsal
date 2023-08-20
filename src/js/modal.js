import * as basicLightbox from 'basiclightbox';
import { moviesEl, bodyEl } from './ref-index';
import getMovieById from './get-movie-by-id';
import getTrailer from './get-trailer';

moviesEl.addEventListener('click', handleMovieClick);

async function handleMovieClick(event) {
  const movieId = event.target.dataset.mvid;

  if (!movieId) return;

  const movie = await getMovieById(movieId);

  const modalInstance = basicLightbox.create(movie, {
    onClose: () => {
      bodyEl.classList.remove('no-scroll');
    },
  });

  modalInstance.show(() => {
    const basicLightboxEl = document.querySelector('.basicLightbox');
    const closeBtnEl = document.querySelector('.modal__close');
    const playBtnEl = document.querySelector('.modal__play');

    closeBtnEl.addEventListener('click', handleCloseBtnClick);
    playBtnEl.addEventListener('click', handlePlayBtnClick);
    bodyEl.classList.add('no-scroll');

    async function handlePlayBtnClick(event) {
      const movieId = event.target.dataset.mvid;

      if (!movieId) return;

      const trailer = await getTrailer(movieId);
      const trailerInstanse = basicLightbox.create(trailer);
      trailerInstanse.show();
    }

    function handleCloseBtnClick() {
      modalInstance.close(() => {
        bodyEl.classList.remove('no-scroll');
      });
    }
  });
}
