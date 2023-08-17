import * as basicLightbox from 'basiclightbox';
import { fetchMovieById } from './api';
import modalTpl from './templates/template-modal.hbs';
import { moviesEl } from './ref-index';

moviesEl.addEventListener('click', handleMovieClick);

async function handleMovieClick(event) {
  console.log(event.target)
}