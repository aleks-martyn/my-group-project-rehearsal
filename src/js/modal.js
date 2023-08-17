import * as basicLightbox from 'basiclightbox';
import { fetchMovieById } from './api';
import modalTpl from './templates/template-modal.hbs';
import { moviesEl } from './ref-index';

moviesEl.addEventListener('click', handleMovieClick);

async function handleMovieClick(event) {
  if (
    event.target.nodeName !== 'DIV' &&
    event.target.nodeName !== 'LI' &&
    event.target.nodeName !== 'IMG' &&
    event.target.nodeName !== 'P' &&
    event.target.nodeName !== 'B'
  )
    return;

  if (!event.target.dataset.mvid) return;
}
