import { configureStore } from '@reduxjs/toolkit';
import displaySlice from "../reducers/displayReducer"
import valuesSlice from '../reducers/valuesReducer';


export default configureStore({
  reducer: 
   {
    display: displaySlice,
    values: valuesSlice,
  }
})