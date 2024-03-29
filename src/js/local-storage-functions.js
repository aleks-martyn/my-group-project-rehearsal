export const load = key => {
  try {
    const serializedState = window.localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    window.localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const checkMovieIsStored = (movies, id) =>
  movies.map(({ id }) => id).includes(id);

export const saveMovie = (el, movies, key) => {
  const {
    mvid,
    releaseDate,
    genreIds,
    titleString,
    originalTitleString,
    posterPath,
  } = el.dataset;

  const movie = {
    id: Number(mvid),
    genre_ids: genreIds.split(',').map(value => Number(value)),
    title: titleString.split('_').join(' '),
    original_title: originalTitleString.split('_').join(' '),
    poster_path: posterPath,
    release_date: releaseDate,
  };

  movies.push(movie);
  save(key, movies);
  return movies;
};

export const removeMovie = (movieId, movies, key) => {
  const index = movies.findIndex(({ id }) => id === movieId);
  movies.splice(index, 1);
  save(key, movies);
  return movies;
};
