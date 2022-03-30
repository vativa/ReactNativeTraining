import React from 'react';
import axios from 'src/api/axios';
import { useReducer } from 'src/store/hooks';

export default ({ reducer, actions, initialState }) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('>>> App state', state);

    const a = {};
    for (let store in actions)
      for (let key in actions[store])
        a[store] = { ...a[store], [key]: actions[store][key](dispatch) };

    axios.interceptors.request.use(
      config => {
        a.system.fetchServer(config);
        return config;
      },
      error => {
        a.system.requestError(error);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      response => {
        a.system.cancelFetch(response);
        return response;
      },
      error => {
        a.system.responseError(error);
        return Promise.reject(error);
      }
    );

    return <Context.Provider value={{ state, dispatch, ...a }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};
