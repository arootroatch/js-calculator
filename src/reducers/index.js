import displayReducer from './displayReducer';
import { combineReducers } from '@reduxjs/toolkit';
import valuesReducer from './valuesReducer';

const rootReducer = combineReducers({
    tasks: displayReducer, valuesReducer
})

export default rootReducer;