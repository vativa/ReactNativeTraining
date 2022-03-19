import React from 'react';
import { useReducer, A } from '.';

const reducer = (state, action) => {
  switch (action.type) {
    case A.CREATE_POST: return [action.payload, ...state];
    case A.UPDATE_POST: return [...state];
    case A.DELETE_POST: return [...state];
    default: return state;
  };
};

const BlogContext = React.createContext();

export const BlogProvider = ({ children, ...props }) => {
  const [posts, dispatch] = useReducer(reducer, []);
  // console.log('>>> BlogProvider ', posts);
  
  return <BlogContext.Provider value={{ posts, dispatch }}>{children}</BlogContext.Provider>;
};

export default BlogContext;
