const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const search = searchTerm => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${searchTerm}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      // return result.results;
      return result.results;
    });
};

export const grabAll = () => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}`;

  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result.results;
      // return result;
    });
};
export const grabSelectedMovie = id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${REACT_APP_API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      return result;
      // return result;
    });
};
