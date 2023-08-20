import * as basicLightbox from 'basiclightbox';
import { moviesEl, bodyEl, basicLightboxEl } from './ref-index';
import getMovieById from './get-movie-by-id';

import { fetchTrailerById } from './api';
import { BASE_TRAILER_URL } from './constants';
import modalTrailerTpl from './templates/template-modal-trailer.hbs';
import getTrailerKey from './get-trailer-key';

moviesEl.addEventListener('click', handleMovieClick);

async function handleMovieClick(event) {
  const movieId = event.target.dataset.mvid;

  if (!movieId) return;

  const movie = await getMovieById(movieId);

  const instance = basicLightbox.create(movie);

  instance.show(() => {
    const closeBtnEl = document.querySelector('.modal__close');
    const playBtnEl = document.querySelector('.modal__play');

    playBtnEl.addEventListener('click', handlePlayBtnClick);
    bodyEl.classList.add('no-scroll');

    async function handlePlayBtnClick(event) {
      const movieId = event.target.dataset.mvid;

      if (!movieId) return;
      getTrailer(movieId);
    }
  });
}

async function getTrailer(movieId) {
  try {
    const videos = await fetchTrailerById(movieId);

    if (!videos?.length) {
      console.log("Sorry, we don't found any trailer");
    }
    console.log(videos);

    const trailerKey = getTrailerKey(videos);
    const trailerPath = `${BASE_TRAILER_URL}${trailerKey}`;
    const trailerMarkup = modalTrailerTpl({ trailerPath });
  
    const instance = basicLightbox.create(trailerMarkup);
    instance.show()
  } catch (error) {
    console.log(error.message);
  }
}
