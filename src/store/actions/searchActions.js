 
export const searchSuccess = (result) => ({
  type: 'SEARCH_SUCCESS', result
});


export function search(title) {
  return (dispatch) => {
    apiClient.query(title)
      .then(response => {
        dispatch(searchSuccess(response.data))
      });
  }
}