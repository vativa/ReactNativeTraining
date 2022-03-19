import React from 'react';

const BlogContext = React.createContext();

const BlogProvider = ({ children, ...props }) => {
  return <BlogContext.Provider value={props}>{children}</BlogContext.Provider>;
};
export { BlogProvider };
