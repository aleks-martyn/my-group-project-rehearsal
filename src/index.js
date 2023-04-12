const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '404ca53f902a08bf3140e0fd0ad0a560';

// class MoviesApiServise {
//    constructor() {
//        this.query = '';
//        this.page = 1;
//    }

function fetchPopularMovies() {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
  });

  const url = `${BASE_URL}movie/popular?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
//}
fetchPopularMovies();

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

fetchMovies('avatar');