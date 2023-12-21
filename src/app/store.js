import { configureStore } from '@reduxjs/toolkit';
import displaySlice from "../reducers/displayReducer"
import valuesSlice from '../reducers/valuesReducer';
import keySlice from '../reducers/keyReducer';

export default configureStore({
  reducer: {
    display: displaySlice,
    values: valuesSlice,
    key: keySlice
  }
})