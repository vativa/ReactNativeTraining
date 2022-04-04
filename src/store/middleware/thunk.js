export default ({ dispatch, getState }) => next => action => {
  // console.log('>>> thunk::action|getState()', action, getState());
  if (typeof action === 'function') return action(dispatch, getState);
  return next(action);
};
