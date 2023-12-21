import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const keySlice = createSlice({
    name: 'key',
    initialState,
    reducers: {
        setKey: (state, action)=>{
            return state = action.payload;
        }
    }
})

export const {setKey} = keySlice.actions;
export default keySlice.reducer;