import { fetchMovieById } from './api';
import renderMovieModal from './render-movie-modal';

export default async function getMovieById(movieId) {
  try {
    const movie = await fetchMovieById(movieId);

    return renderMovieModal(movie);
  } catch (error) {
    console.log(error.message);
  }
}
