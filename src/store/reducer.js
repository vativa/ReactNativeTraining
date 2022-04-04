import { reducer as posts } from './stores/posts';
import { reducer as system } from 'src/store/stores/system';

const combineReducers =
  reducers => (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };

export const reducer = combineReducers({ posts, system });
