const createStore = (reducer, initialState, applyMiddleware) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;
  
  const dispatch = applyMiddleware({
    dispatch: action => {
      const prevState = state;
      state = reducer(state, action);
      // console.log('>>> createStore::insideDispatch::prevState-nextState', prevState, state);
      listeners.forEach(listener => listener());
      return action;
    },
    getState,
  });

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({ type: 'INITIALIZE_STORE' });
  return { getState, dispatch, subscribe };
};

export default createStore;
