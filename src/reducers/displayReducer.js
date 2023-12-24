import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    value: '0',
    solution: false,
    decimal: false
}

const isOperator = new RegExp(/[-+*/]/); 

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers:{
        numberDisplay: (state, action)=>{
            if(state.value==='0' || isOperator.test(state.value)){
                return {
                    ...state,
                    decimal: false,
                    value: String(action.payload)
                }
            } else if (state.solution){
                return {
                    ...state,
                    value: String(action.payload),
                    solution: false
                }
            } else {
                return {
                    ...state,
                    value: state.value.concat(action.payload)
                }
            }
        },
        overwrite: (state, action)=>{
            if(state.solution){
                return{
                    decimal: false,
                    value: String(action.payload),
                    solution: false
                }
            }else {
                return {
                    decimal: false,
                    ...state,
                    value: String(action.payload)
                }
            }
        },
        decimalDisplay: (state, action)=>{
            if(!state.decimal && !state.solution){
                return {
                    ...state,
                    value: state.value.concat(action.payload),
                    decimal: true
                }
            } else {
                return state;
            }
        },
        equalsDisplay: (state, action)=>{
            return {
                value: String(action.payload),
                solution: true,
                decimal: false
            }
        }
    }
 
})
export const {equalsDisplay, numberDisplay, overwrite, decimalDisplay} = displaySlice.actions;
export default displaySlice.reducer;