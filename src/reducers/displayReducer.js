import { createSlice } from "@reduxjs/toolkit";


const initialState = '0';

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers:{
        overwrite: (state, action)=>{
            return state = String(action.payload);
        },
        concat: (state, action)=>{
            return state.concat(action.payload);
        },

    }
 
})
export const {overwrite, concat} = displaySlice.actions;
export default displaySlice.reducer;