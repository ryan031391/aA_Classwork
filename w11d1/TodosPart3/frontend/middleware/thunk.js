const myThunk = store => next => action =>{
  debugger
  if(typeof action === 'function'){
    return action(store.dispatch, store.getState);
  } else {
    return next(action);
  }
}

export default myThunk;