// First lets describe actions
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export const initState = [];

export const actionCreators = {
  managePost: dispatch => (post, callback) => {
    // Async actions come here
    dispatch({ type: isNaN(post.id) ? CREATE_POST : UPDATE_POST, payload: post });
    typeof callback === 'function' && callback();
  },
  deletePost: dispatch => index => dispatch({ type: DELETE_POST, payload: index }),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_POST:
      const post = { ...action.payload, id: Math.floor(Math.random() * 9999) };
      return [...state, post];
    case UPDATE_POST:
      return state.map(post => (post.id === action.payload.id ? { ...action.payload } : post));
    case DELETE_POST:
      return state.filter((post, index) => index != action.payload);
    default:
      return state;
  }
};
