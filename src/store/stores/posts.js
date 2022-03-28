// First lets describe actions
const MANAGE_POST = 'MANAGE_POST';
const DELETE_POST = 'DELETE_POST';

// Let's create actions
export const postActionCreators = {
  managePost: (post, callback) => {
    // Async actions come here
    // After async completes, clean/unsubscribe
    callback();
    return {
      type: MANAGE_POST,
      payload: post,
    };
  },
  deletePost: index => ({ type: DELETE_POST, payload: index }),
};

// Implement reducers
export const reducer = (state, action) => {
  // console.log('>>> appReducer ', state);
  switch (action.type) {
    case MANAGE_POST:
      const posts = [...state];
      const { id, ...post } = action.payload;
      const index = isNaN(id) ? posts.length : id;
      posts[index] = post;
      return posts;
    case DELETE_POST:
      return state.filter((post, index) => index != action.payload);
    default:
      return state;
  }
  
};

