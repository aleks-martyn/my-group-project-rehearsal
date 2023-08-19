import * as basicLightbox from 'basiclightbox';
import { moviesEl, bodyEl, basicLightboxEl } from './ref-index';
import getMovieById from './get-movie-by-id';
import { fetchTrailerById } from './api';

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
  } catch (error) {
    console.log(error.message);
  }
}
