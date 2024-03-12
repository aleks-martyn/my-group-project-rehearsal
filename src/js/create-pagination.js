import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { container } from './ref-index';

export default function createPagination(
  totalItems,
  itemsPerPage,
  visiblePages
) {
  if (totalItems > 0)
    return new Pagination(container, {
      totalItems,
      itemsPerPage,
      visiblePages,
      centerAlign: true,
    });
}
