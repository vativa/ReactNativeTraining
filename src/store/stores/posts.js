// First lets describe actions
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

// Let's create actions
export const actionCreators = {
  createPost: id => {
    // Async actions come here
    return {
      type: CREATE_POST,
      payload: {
        id: Math.floor(Math.random() * 99999),
        title: `Blog Post #${id}`,
      },
    };
  },
  updatePost: id => {},
  deletePost: id => ({ type: DELETE_POST, payload: id }),
};

// Implement reducers
export const reducer = (state, action) => {
  // console.log('>>> appReducer ', state);
  switch (action.type) {
    case CREATE_POST:
      return [action.payload, ...state];
    case UPDATE_POST:
      return [...state];
    case DELETE_POST:
      return state.filter(post => post.id != action.payload);
    default:
      return state;
  }
  
};

