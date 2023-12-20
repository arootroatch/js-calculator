import { createSlice } from "@reduxjs/toolkit";

const initialState = "0";

const valuesSlice = createSlice({
    name: 'values',
    initialState,
    reducers: {
        storeValue: (state, action) =>{
            return state.concat(action.payload);
        },
        clear: (state, action)=>{
            return state = String(action.payload);
        },
        swapOps: (state, action)=>{
            return state.replace(/[\+=\-/\*]$/, action.payload);
        },
        swapTwoOps: (state, action)=>{
            return state.slice(0,-2).concat(action.payload);
        },
        swapZero: (state, action)=>{
            return state.replace(/^0/, action.payload);
        },
    }
})
export const {storeValue, clear, swapOps, swapTwoOps, swapZero, solution } = valuesSlice.actions;
export default valuesSlice.reducer;