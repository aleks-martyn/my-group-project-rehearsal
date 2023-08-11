export default function getGenresById(genreIds, genres) {
  const decodedGenres = [];

  for (const genre of genres) {
    if (genreIds === 'N/A' || genreIds.length === 0) {
      decodedGenres.push('Other');
      break;
    } else if (genreIds.includes(genre.id)) {
      decodedGenres.push(genre.name);
    }
  }

  if (decodedGenres.length > 2) {
    decodedGenres.splice(2, decodedGenres.length - 2, 'Other');
  }

  return decodedGenres.join(', ');
}
