import movieModalTpl from './templates/template-modal.hbs';
import { BASE_IMAGE_URL, NO_POSTER } from './constants';

export default function renderMovieModal({
  id,
  release_date,
  genres,
  poster_path,
  original_title,
  popularity,
  overview,
  vote_average,
  vote_count,
  title,
}) {
  const movie = {
    id,
    release_date,
    poster: poster_path ? `${BASE_IMAGE_URL}w500${poster_path}` : NO_POSTER,
    vote: vote_average?.toFixed(1),
    votes: vote_count,
    popularity: Math.round(popularity),
    originalTitle: original_title || title,
    title: title || original_title,
    about: overview || 'Not found',
    genres: genres.map(genre => genre.name).join(', '),
    genreIds: genres.map(genre => genre.id),
    poster_path,
    titleString: title.split(' ').join('_'),
    originalTitleString: original_title.split(' ').join('_'),
  };

  return movieModalTpl(movie);
}
