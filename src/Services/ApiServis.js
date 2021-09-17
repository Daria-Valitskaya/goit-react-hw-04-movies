const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "980aef4f6602bffaf56ce8d4b0805479";

async function fetchWithErrorHanding(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovie() {
  return fetchWithErrorHanding(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}
export function fetchByKeyword(value) {
  return fetchWithErrorHanding(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${value}`
  );
}
export function fetchFullInfo(movieId) {
  return fetchWithErrorHanding(`${BASE_URL}movie/${movieId}?api_key=${KEY}`);
}
export function fetchMovieCast(movieId) {
  return fetchWithErrorHanding(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`
  );
}
export function fetchMovieReviews(movieId) {
  return fetchWithErrorHanding(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`
  );
}
