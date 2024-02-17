import { moviesEl } from './ref-index';
import renderGallery from './render-gallery';
import { load } from './local-storage-functions';
import { WATCHED_MOVIES } from './constants';

async function getStoredMovies() {
  const movies = load(WATCHED_MOVIES) ?? [];

  try {
    const res = await renderGallery(movies);
    return (moviesEl.innerHTML = res);
  } catch (error) {
    console.log(error.message);
  }
}

getStoredMovies();
