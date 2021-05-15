import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creators
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
