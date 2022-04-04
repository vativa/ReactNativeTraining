import createContext from 'src/store/createContext';
import { reducer } from 'src/store/reducer';
import { initState as postInitState } from 'src/store/stores/posts';
import { initState as systemInitState } from 'src/store/stores/system';
import thunk from './middleware/thunk';
import logger from 'src/store/middleware/logger';

export const { Context, Provider } = createContext(
  {
    reducer,
    initialState: { posts: postInitState, system: systemInitState },
  },
  [thunk, logger]
);
