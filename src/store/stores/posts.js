// First lets describe actions
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

// Let's create actions
export const postActionCreators = {
  createPost: ({ ...post }, callback) => {
    // Async actions come here
    // After async completes, clean/unsubscribe
    callback();
    return {
      type: CREATE_POST,
      payload: { ...post },
    };
  },
  updatePost: (post, callback) => {
    // Async actions come here
    // After async completes, clean/unsubscribe
    callback();
    return {
      type: UPDATE_POST,
      payload: { ...post },
    };
  },
  deletePost: index => ({ type: DELETE_POST, payload: index }),
};

// Implement reducers
export const reducer = (state, action) => {
  // console.log('>>> appReducer ', state);
  switch (action.type) {
    case CREATE_POST:
    case UPDATE_POST:
      const posts = [...state];
      const { index, ...post } = action.payload;
      const id = isNaN(index) ? posts.length : index;
      posts[id] = { ...post };
      return posts;
    case DELETE_POST:
      return state.filter((post, index) => index != action.payload);
    default:
      return state;
  }
  
};

