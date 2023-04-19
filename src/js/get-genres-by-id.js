export default function getGenresById(arrayId, genresArr) {
  const arr = [];

  for (const genre of genresArr) {
    if (arrayId === 'N/A' || arrayId.length === 0) {
      arr.push('Other');
      break;
    } else if (arrayId.includes(genre.id)) {
      arr.push(genre.name);
    }
  }

  if (arr.length > 2) {
    arr.splice(2, arr.length - 2, 'Other');
  }

  return arr.join(', ');
}
