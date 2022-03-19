import { useState } from 'react';

const useReducer = (reducer, initState) => {
  const [state, setState] = useState(initState);
  const dispatch = action => setState(reducer(state, action));
  return [state, dispatch];
};

export { useReducer };
