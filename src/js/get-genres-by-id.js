export default function getGenresById(genreIds, genres) {
  if (genreIds === 'N/A' || genreIds.length === 0) return 'Other';

  const decodedGenres = [];

  for (const genre of genres) {
    if (genreIds.includes(genre.id)) {
      decodedGenres.push(genre.name);
    }
  }

  if (decodedGenres.length > 2) {
    decodedGenres.splice(2, decodedGenres.length - 2, 'Other');
  }

  return decodedGenres.join(', ');
}
