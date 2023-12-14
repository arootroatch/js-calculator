import { configureStore } from '@reduxjs/toolkit';
import displayReducer from "../reducers/displayReducer"
import valuesReducer from '../reducers/valuesReducer';

export default configureStore({
  reducer: {
    display: displayReducer,
    values: valuesReducer
  }
})