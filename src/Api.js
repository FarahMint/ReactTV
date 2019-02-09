const API = `9aa0bffaac33d16eab77811328d27bda`;

export const search = searchTerm => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${searchTerm}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      // return result.results;
      return result.results;
    });
};

export const grabAll = () => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API}`;

  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result.results;
      // return result;
    });
};
export const grabSelectedMovie = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result;
      // return result;
    });
};
