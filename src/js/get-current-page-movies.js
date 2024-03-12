export default function getCurrentPageMovies(
  movies,
  moviesPerPage,
  currentPage = 1
) {
  const startIdx = moviesPerPage * currentPage - moviesPerPage;

  const endIdx = moviesPerPage * currentPage;

  return movies.slice(startIdx, endIdx);
}
