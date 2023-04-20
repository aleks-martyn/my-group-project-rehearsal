import axios from 'axios';
export {
  fetchPopularMovies,
  fetchGenresList,
  fetchMovieByKeyword,
  fetchMovieById,
  fetchTrailerById,
};

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '404ca53f902a08bf3140e0fd0ad0a560';

async function fetchPopularMovies(pageNumber) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
    page: `${pageNumber}`,
    language: 'en-US',
  });

  const url = `${BASE_URL}/movie/popular?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data;
}

async function fetchGenresList() {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
    language: 'en-US',
  });

  const url = `${BASE_URL}genre/movie/list?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data.genres;
}

async function fetchMovieByKeyword(searchQuery) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
    query: `${searchQuery}`,
  });

  const url = `${BASE_URL}search/movie?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data;
}

async function fetchMovieById(movieId) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
  });

  const url = `${BASE_URL}movie/${movieId}?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data;
}

async function fetchTrailerById(movie_id) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
  });

  const url = `${BASE_URL}movie/${movie_id}/videos?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data.results;
}

async function fetchTrendingMovies() {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
  });

  const url = `${BASE_URL}trending/movie/week?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data;
}

async function fetchConfig() {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
  });

  const url = `${BASE_URL}configuration?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data;
}

fetchTrendingMovies().then(data => {
  console.log(data);
  const { page, results, total_pages, total_results } = data;
});

fetchConfig();
