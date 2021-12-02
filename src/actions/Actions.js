// Action types

export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FILTER";
export const SET_FAVORITEMOVIES = "SET_FAVORITEMOVIES";

// Action creators

export function setMovies(value) {
  return { type: SET_MOVIES, value };
}
export function setFilter(value) {
  return { type: SET_FILTER, value };
}
export function setFavoriteMovie(value) {
  return { type: SET_FAVORITEMOVIES, value };
}
