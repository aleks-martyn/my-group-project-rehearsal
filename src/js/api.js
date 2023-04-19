import axios from 'axios';
export { fetchPopularMovies, fetchGenres, fetchMovies };
  
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '404ca53f902a08bf3140e0fd0ad0a560'; 

async function fetchPopularMovies(
  api_key,
  base_url,
  pageNumber
) {
  const searchParams = new URLSearchParams({
    api_key: `${api_key}`,
    page: `${pageNumber}`,
    language: 'en-US',
  });

  const url = `${base_url}/movie/popular?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data;
}

async function fetchGenres(api_key, base_url) {
  const searchParams = new URLSearchParams({
    api_key: `${api_key}`,
    language: 'en-US',
  });

  const url = `${base_url}genre/movie/list?${searchParams}`;
  const dataObj = await axios.get(url);
  const { data } = dataObj;

  return data.genres;
}

function fetchMovies(searchQuery) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
    query: `${searchQuery}`,
  });

  const url = `${BASE_URL}search/movie?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}