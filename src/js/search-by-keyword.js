import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { fetchMovieByKeyword } from './api';
import {
  searchFormEl,
  inputEl,
  errorEl,
  moviesEl,
  container,
} from './ref-index';
import renderGallery from './render-gallery';
import setScrollToUp from './set-scroll';
