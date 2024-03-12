import { getUpdatedMovies } from './get-updated-movies';
import renderGallery from './render-gallery';
import { moviesEl } from './ref-index';
import createPagination from './create-pagination';
import getCurrentPageMovies from './get-current-page-movies';
import setScrollToUp from './set-scroll';
import getTargetPage from './get-target-page';

export default async function handleModalBtnClick(hasClass, el, paramsObj) {
  if (hasClass === false) {
    const hasCurrentClass = el.classList.contains('lib-btn--current');

    if (hasCurrentClass === false) {
      getUpdatedMovies(paramsObj);
    } else {
      const targetPage = getTargetPage(paramsObj);
      const updatedMovies = getUpdatedMovies(paramsObj);
      const movieQuantity = updatedMovies.length;
      const moviesPerPage = 4;

      const visiblePages = 3;

      if (movieQuantity > 0) {
        const visibleMovies = getCurrentPageMovies(
          updatedMovies,
          moviesPerPage,
          targetPage
        );

        const pagination = createPagination(
          movieQuantity,
          moviesPerPage,
          visiblePages
        );

        if (targetPage) {
          pagination.movePageTo(targetPage);
        }

        try {
          pagination.on('afterMove', async event => {
            setScrollToUp();
            const currentPage = event.page;
            const visibleMovies = getCurrentPageMovies(
              updatedMovies,
              moviesPerPage,
              currentPage
            );

            const markup = await renderGallery(visibleMovies);
            return (moviesEl.innerHTML = markup);
          });

          const markup = await renderGallery(visibleMovies);
          return (moviesEl.innerHTML = markup);
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  } else {
    getUpdatedMovies(paramsObj);
  }
}
