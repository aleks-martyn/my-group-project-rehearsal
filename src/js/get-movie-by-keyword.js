import { fetchMovieByKeyword } from './api';
import renderGallery from './render-gallery';
import { moviesEl } from './ref-index';

export default async function getMovieByKeyword(searchQuery, pageNumber) {
  try {
    const { page, results, total_pages, total_results } =
      await fetchMovieByKeyword(searchQuery, pageNumber);

    const res = await renderGallery(results);
    return (moviesEl.innerHTML = res);
  } catch (error) {
    console.log(error.message);
  }
}
