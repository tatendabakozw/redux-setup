import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer.js'

const rootReducer = combineReducers({
    simple:  simpleReducer
});

export default rootReducer