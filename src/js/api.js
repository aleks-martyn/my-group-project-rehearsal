import axios from 'axios';
import { API_KEY, BASE_URL } from './constants';
export {
  fetchPopularMovies,
  fetchGenresList,
  fetchMovieByKeyword,
  fetchMovieById,
  fetchTrailerById,
  fetchTrendingMovies,
  fetchConfig,
};

async function fetchPopularMovies(value) {
  const pageNumber = value ? value : 1;

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

async function fetchMovieByKeyword(searchQuery, pageNumber) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
    query: `${searchQuery}`,
    page: `${pageNumber}`,
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

async function fetchTrailerById(movieId) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
  });

  const url = `${BASE_URL}movie/${movieId}/videos?${searchParams}`;
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
