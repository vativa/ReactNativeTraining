import createContext from './createContext';
import { reducer } from './reducer';
import {
  initState as postInitState,
  actionCreators as postActionCreators,
} from 'src/store/stores/posts';
import {
  initState as systemInitState,
  actionCreators as systemActionCreators
} from 'src/store/stores/system';

export const { Context, Provider } = createContext({
  reducer,
  initialState: { posts: postInitState, system: systemInitState },
  actions: { posts: { ...postActionCreators }, system: systemActionCreators },
});
