import React from 'react';
import { useReducer } from 'src/store/hooks';

export default ({ reducer, actions, initialState }) => {
  const Context = React.createContext();
  
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const a = {};
    for (let store in actions)
      for (let key in actions[store])
        a[store] = { ...a[store], [key]: actions[store][key](dispatch) };
  
    return <Context.Provider value={{ state, dispatch, ...a }}>{children}</Context.Provider>;
  };
  
  return { Context, Provider };
};
