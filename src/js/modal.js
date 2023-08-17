import * as basicLightbox from 'basiclightbox';
import { moviesEl, bodyEl, basicLightboxEl } from './ref-index';
import getMovieById from './get-movie-by-id';

moviesEl.addEventListener('click', handleMovieClick);

async function handleMovieClick(event) {
  const movieId = event.target.dataset.mvid;

  if (!movieId) return;

  const movie = await getMovieById(movieId);
console.log(movie)
  const instance = basicLightbox.create(movie);

  instance.show(() => {
    const closeBtnEl = document.querySelector('modal__close');
    bodyEl.classList.add('no-scroll');
  });
}
