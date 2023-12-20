import { configureStore } from '@reduxjs/toolkit';
import displaySlice from "../reducers/displayReducer"
import valuesReducer from '../reducers/valuesReducer';

export default configureStore({
  reducer: {
    display: displaySlice,
    values: valuesReducer
  }
})