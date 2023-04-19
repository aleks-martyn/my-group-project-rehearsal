import axios from 'axios';
export { fetchPopularMovies, fetchGenres, fetchMovies };

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

async function fetchGenres() {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
    language: 'en-US',
  });

  const url = `${BASE_URL}genre/movie/list?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data.genres;
}

async function fetchMovies(searchQuery) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
    query: `${searchQuery}`,
  });

  const url = `${BASE_URL}search/movie?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data;
}
