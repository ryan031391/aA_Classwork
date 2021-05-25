import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/root_reducer'
import myThunk from '../middleware/thunk.js'
import logger from 'redux-logger'

const configureStore = (preLoadedState = {}) => {
    return createStore(rootReducer, preLoadedState, applyMiddleware(myThunk, logger))
}

export default configureStore;