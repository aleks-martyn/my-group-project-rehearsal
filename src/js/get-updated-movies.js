import {
  load,
  saveMovie,
  removeMovie,
  checkMovieIsStored,
} from './local-storage-functions';

export const getUpdatedMovies = ({ key, id, el, listName }) => {
  const storedMovies = load(key) ?? [];

  if (storedMovies.length > 0) {
    const isStoredMovie = checkMovieIsStored(storedMovies, id);

    if (isStoredMovie) {
      el.textContent = `ADD TO ${listName}`;
      el.classList.remove('modal__btn--added');
      return removeMovie(id, storedMovies, key);
    } else {
      el.textContent = `REMOVE FROM ${listName}`;
      el.classList.add('modal__btn--added');
      return saveMovie(el, storedMovies, key);
    }
  } else {
    el.textContent = `REMOVE FROM ${listName}`;
    el.classList.add('modal__btn--added');
    return saveMovie(el, storedMovies, key);
  }
};
