import { createSlice } from "@reduxjs/toolkit";


const initialState = '0';
const endsOperator = new RegExp(/[\+=\-/\*]$/);
const isSolution = new RegExp(/=/);
const isDecimal = new RegExp(/\./g);

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers:{
        numberDisplay: (state, action)=>{
            // currently doesn't overwrite solution
            if(state.slice(0,-1)==='0' || endsOperator.test(state) || isSolution.test(state)){
                return state = String(action.payload);
            } else {
                return state.concat(action.payload);
            }
        },
        overwrite: (state, action)=>{
            return state = String(action.payload);
        },
        decimalDisplay: (state, action)=>{
            if(!isDecimal.test(state)){
                return state.concat(action.payload);
            }
        }
       

    }
 
})
export const {numberDisplay, overwrite, decimalDisplay} = displaySlice.actions;
export default displaySlice.reducer;