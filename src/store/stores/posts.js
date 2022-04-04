import axios from 'src/api/axios';

const FETCH_POSTS = 'FETCH_POSTS';
const GET_POST_ID = 'GET_POST_ID';
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export const initState = [];

export const actionCreators = {
  fetchPosts: () => async dispatch => {
    const { data } = await axios.get('/blogposts');
    dispatch({ type: FETCH_POSTS, payload: data });
    // console.log('>>> fetchPosts::data', data);
  },
  createPost: (post, callback) => async dispatch => {
    const { data } = await axios.post('/blogposts', { ...post });
    dispatch({ type: CREATE_POST, payload: data });
    typeof callback === 'function' && callback();
  },
  updatePost:
    ({ id, ...post }, callback) =>
    async dispatch => {
      const { data } = await axios.put(`/blogposts/${id}`, { ...post });
      dispatch({ type: UPDATE_POST, payload: data });
      typeof callback === 'function' && callback();
    },
  deletePost: (id, callback) => async dispatch => {
    try {
      await axios.delete(`/blogposts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
    } catch ({ response }) {
      response?.status === 404 && dispatch({ type: DELETE_POST, payload: id });
    } finally {
      typeof callback === 'function' && callback();
    }
  },
};

export const reducer = (state = initState, action) => {
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

const testBlogPosts = () => {
  const prevState = [];
  const action = {
    type: FETCH_POSTS,
    payload: [
      {
        id: 777,
        title: 'title777',
        content: 'content777',
      },
    ],
  };
  const nextState = [
    {
      id: 777,
      title: 'title777',
      content: 'content777',
    },
  ];
  
  // deepFreeze(prevState);
  // deepFreeze(action);
  
  // expect(
  //   reducer(prevState, action)
  // ).toEqual(nextState);
};

// testBlogPosts();
// console.log('>>> ALL TESTS PASSED');
