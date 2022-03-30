import createContext from './createContext';
import { reducer } from './reducer';
import {
  initState as postInitState,
  actionCreators as postActionCreators,
} from 'src/store/stores/posts';

export const { Context, Provider } = createContext({
  reducer,
  initialState: { posts: postInitState },
  actions: { posts: { ...postActionCreators } },
});
