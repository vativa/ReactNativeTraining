import axios from 'src/api/axios';

const FETCH_POSTS = 'FETCH_POSTS';
const GET_POST_ID = 'GET_POST_ID';
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export const initState = [];

export const actionCreators = {
  fetchPosts: dispatch => () => {
    axios
      .get('/blogposts')
      .then(({ data }) => {
        dispatch({ type: FETCH_POSTS, payload: data });
      })
      .catch(console.error);
  },
  createPost: dispatch => (post, callback) => {
    axios
      .post('/blogposts', { ...post })
      .then(({ data }) => {
        dispatch({ type: CREATE_POST, payload: data });
        typeof callback === 'function' && callback();
      })
      .catch(error => console.error('>>>', error.toJSON()));
  },
  updatePost:
    dispatch =>
    ({ id, ...post }, callback) => {
      axios
        .put(`/blogposts/${id}`, { ...post })
        .then(({ data }) => {
          dispatch({ type: UPDATE_POST, payload: data });
          typeof callback === 'function' && callback();
        })
        .catch(error => console.error('>>>', error.toJSON()));
    },
  deletePost: dispatch => (id, callback) => {
    axios
      .delete(`/blogposts/${id}`)
      .then(({ data }) => {
        dispatch({ type: DELETE_POST, payload: id });
        typeof callback === 'function' && callback();
      })
      .catch(error => {
        if (error.response?.status === 404) {
          dispatch({ type: DELETE_POST, payload: id });
          typeof callback === 'function' && callback();
        }
      });
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map(post => (post.id === action.payload.id ? action.payload : post));
    case DELETE_POST:
      return state.filter(post => post.id != action.payload);
    default:
      return state;
  }
};
