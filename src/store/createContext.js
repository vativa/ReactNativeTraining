import React from 'react';
import axios from 'src/api/axios';
import createStore from 'src/store/createStore';
import { actionCreators as sac } from 'src/store/stores/system';

const applyMiddleware =
  middlewares => ({ dispatch, getState }) => {
    let d = dispatch;
    middlewares.forEach(mw => (d = mw({ dispatch, getState })(d)));
    return d;
  };

const createContext = ({ reducer, initialState }, middlewares) => {
  const Context = React.createContext();
  // console.log('>>> createContext::createStore::RootState', store.getState());
  const store = createStore(reducer, initialState, applyMiddleware(middlewares));
  
  const Provider = ({ children }) => {
    const [state, setState] = React.useState(store.getState());
    React.useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        // setState(store.getState());
      });
      return unsubscribe;
    }, []);

    axios.interceptors.request.use(
      config => {
        store.dispatch(sac.fetchServer(config));
        return config;
      },
      error => {
        store.dispatch(sac.requestError(error));
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      response => {
        // console.log('>>> request::error', response);
        store.dispatch(sac.cancelFetch(response));
        return response;
      },
      error => {
        // console.error('>>> response::error', error.toJSON());
        store.dispatch(sac.responseError(error));
        return Promise.reject(error);
      }
    );

    // Using state hook will rerender provider component
    return <Context.Provider value={{ ...store }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};

export default createContext;
