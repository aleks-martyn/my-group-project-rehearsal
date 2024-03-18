import { load } from './local-storage-functions';

export default function getTargetPage({ key, id }) {
  const storedMovies = load(key) ?? [];
  const moviesPerPage = 4;

  if (storedMovies.length > 0) {
    const deletedMovieIdx = storedMovies.findIndex(movie => movie.id === id);

    if (deletedMovieIdx !== -1) {
      return Math.ceil((deletedMovieIdx + 1) / moviesPerPage);
    }
  }
}
