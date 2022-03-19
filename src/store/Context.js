import React, { createContext } from 'react';
import { useReducer } from './hooks';
import { reducer } from './reducer';

const initState = {
  posts: [],
};

export const Context = createContext(initState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  // console.log('>>> Provider ', state);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
