import * as basicLightbox from 'basiclightbox';
import { moviesEl } from './ref-index';
import getMovieById from './get-movie-by-id';

moviesEl.addEventListener('click', handleMovieClick);

async function handleMovieClick(event) {
  const movieId = event.target.dataset.mvid;

  if (!movieId) return;

  const movie = await getMovieById(movieId);

  const instance = basicLightbox.create(movie);
  console.log(instance);
}
