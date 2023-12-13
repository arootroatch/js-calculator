import { configureStore } from '@reduxjs/toolkit';
import displayReducer from "../features/counter/displaySlice"

export default configureStore({
  reducer: {
    display: displayReducer
  }
})