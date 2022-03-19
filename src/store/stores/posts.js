// First lets describe actions
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

// Let's create actions
export const actionCreators = {
  createPost: id => {
    return { type: CREATE_POST, payload: { title: `Blog Post #${id}` } };
  },
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
      return [...state];
    default:
      return state;
  }
  
};

