import movieModalTpl from './templates/template-modal.hbs';
import { BASE_IMAGE_URL, NO_POSTER } from './constants';

export default function renderMovieModal({
  id,
  genres,
  poster_path,
  original_title,
  popularity,
  overview,
  vote_average,
  vote_count,
  title,
}) {
  const poster = poster_path
    ? `${BASE_IMAGE_URL}w500${poster_path}`
    : NO_POSTER;

  const vote = vote_average?.toFixed(1);
  const moviePopularity = Math.round(popularity);
  const originalTitle = original_title || title;
  const movieTitle = title || original_title;
  const about = overview || 'Not found';
  const movieGenres = genres.map(genre => `${genre.name}`).toString();

  console.log(movieGenres);

  return movieModalTpl({
    id,
    movieGenres,
    poster,
    originalTitle,
    movieTitle,
    moviePopularity,
    about,
    vote,
    votes: vote_count,
  });
}
