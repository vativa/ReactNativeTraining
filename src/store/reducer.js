import { reducer as posts } from './posts';

const combineReducers = reducers => (state = {}, action) => {
  return Object.keys(reducers).reduce(
    (nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
};

export const reducer = combineReducers({ posts });
