import { configureStore } from '@reduxjs/toolkit';
import displayReducer from "../reducers/displayReducer"

export default configureStore({
  reducer: {
    display: displayReducer
  }
})