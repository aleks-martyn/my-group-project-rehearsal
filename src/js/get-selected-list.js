import { moviesEl } from './ref-index';
import { load } from './local-storage-functions';
import renderGallery from './render-gallery';

export default async function getSelectedList(firstEl, secondEl, key) {
  firstEl.classList.remove('lib-btn--current');
  secondEl.classList.add('lib-btn--current');

  const storedMovies = load(key) ?? [];

  if (storedMovies.length > 0) {
    try {
      const markup = await renderGallery(storedMovies);
      return (moviesEl.innerHTML = markup);
    } catch (error) {
      console.log(error.message);
    }
  }
}
