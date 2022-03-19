import { useState } from 'react';

export const useReducer = (reducer, initState) => {
  const [state, setState] = useState(initState);
  const dispatch = action => setState(reducer(state, action));
  return [state, dispatch];
};
