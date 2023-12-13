import displayReducer from './displayReducer';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    tasks: displayReducer
})

export default rootReducer;