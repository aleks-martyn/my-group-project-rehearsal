import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const galleryEl = document.querySelector('.gallery');
const paginationContainerEl = document.querySelector('#tui-pagination-container');
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '404ca53f902a08bf3140e0fd0ad0a560';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/';

fetchPopularMovies().then(data => {
  const { page, results, total_pages, total_results } = data;
  renderGallery(results);
});

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

const container = document.getElementById('tui-pagination-container');
const instance = new Pagination(container, {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 5,
  centerAlign: true,
});
const pageNumber = instance.getCurrentPage();
console.log(pageNumber);
