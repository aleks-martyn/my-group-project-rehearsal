import { fetchPopularMovies } from './api';
import renderGallery from './render-gallery';
import { moviesEl } from './ref-index';

export default async function getPopularMovies(pageNumber) {
  try {
    const { results, total_results } = await fetchPopularMovies(pageNumber);

    const res = await renderGallery(results);
    return (moviesEl.innerHTML = res);
  } catch (error) {
    console.log(error.message);
  }
}
