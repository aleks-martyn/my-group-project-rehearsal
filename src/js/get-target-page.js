import { load } from './local-storage-functions';

export default function getTargetPage({ key, id }) {
  const storedMovies = load(key) ?? [];
  const moviesPerPage = 4;

  if (storedMovies.length > 0) {
    const deletedMovie = storedMovies.find(movie => movie.id === id);

    if (deletedMovie) {
      const movieIdx = storedMovies.indexOf(deletedMovie);

      return Math.ceil((movieIdx + 1) / moviesPerPage);
    }
  }
}
