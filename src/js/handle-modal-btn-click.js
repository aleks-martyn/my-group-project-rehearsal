import { getUpdatedMovies } from './get-updated-movies';
import renderGallery from './render-gallery';
import { moviesEl } from './ref-index';

export default async function handleModalBtnClick(hasClass, el, paramsObj) {
  if (hasClass === false) {
    const hasCurrentClass = el.classList.contains('lib-btn--current');

    if (hasCurrentClass === false) {
      getUpdatedMovies(paramsObj);
    } else {
      const movies = getUpdatedMovies(paramsObj);

      try {
        const markup = await renderGallery(movies);

        return (moviesEl.innerHTML = markup);
      } catch (error) {
        console.log(error.message);
      }
    }
  } else {
    getUpdatedMovies(paramsObj);
  }
}
