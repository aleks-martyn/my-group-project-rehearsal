import { fetchTrailerById } from './api';
import { BASE_TRAILER_URL } from './constants';
import modalTrailerTpl from './templates/template-modal-trailer.hbs';
import getTrailerKey from './get-trailer-key';
import { Report } from 'notiflix/build/notiflix-report-aio';

export default async function getTrailer(movieId) {
  try {
    const videos = await fetchTrailerById(movieId);

    if (!videos?.length) {
      Report.failure("Sorry, we don't found any trailer");
    }

    const trailerKey = getTrailerKey(videos);
    const trailerPath = `${BASE_TRAILER_URL}${trailerKey}`;

    return modalTrailerTpl({ trailerPath });
  } catch (error) {
    console.log(error.message);
  }
}
