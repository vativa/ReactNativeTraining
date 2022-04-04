export default store => next => action => {
  // Open console log group
  __DEV__ &&
    console.groupCollapsed(
      '>>> Dispatching action',
      typeof action === 'function' ? 'function' : action
    );
  // Log previous state
  __DEV__ && console.log('>>> prevState:', store.getState());
  // Dispatch the action
  const result = next(action);
  // Log next state
  __DEV__ && console.log('>>> nextState:', store.getState());
  // End console log group
  __DEV__ && console.groupEnd();
  // Pass to next middle ware
  return result;
};
