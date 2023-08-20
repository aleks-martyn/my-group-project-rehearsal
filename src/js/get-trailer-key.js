export default function getTrailerKey(videos) {
  const trailer = videos.find(
    video => video.name === 'Official Trailer' || video.type === 'Trailer'
  );

  if (!trailer) {
    const randomVideo = Math.floor(Math.random() * videos.length);
    return videos[randomVideo].key;
  }

  return trailer.key;
}
