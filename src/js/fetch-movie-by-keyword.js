function fetchMovies(searchQuery) {
  const searchParams = new URLSearchParams({
    api_key: `${API_KEY}`,
    query: `${searchQuery}`,
  });

  const url = `${BASE_URL}search/movie?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}