
const initialState = {
    loading: false,
    movies: [],
    searchTerm: "",
    id: "",
}
export default (state = initialState, action) => {
  if (action.type === 'SEARCH_SUCCESS') {
    state = action.result;
  }
  return state;
}