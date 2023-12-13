import { createSlice } from '@reduxjs/toolkit'

export const displaySlice = createSlice({
  name: 'display',
  initialState: 0,
  reducers: {
    setDisplay: (state, action) => {
      state = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setDisplay } = displaySlice.actions

export default displaySlice.reducer