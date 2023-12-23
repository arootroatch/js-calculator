import { createSlice } from "@reduxjs/toolkit";


const initialState =  {
    value: '0',
    solution: false
}

const isDecimal = new RegExp(/\./g);
const isOperator = new RegExp(/[-+*/]/); 

//not all tests passing, problems with desimals

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers:{
        numberDisplay: (state, action)=>{
            if(state.value==='0' || isOperator.test(state.value)){
                return {
                    ...state,
                    value: String(action.payload)
                }
            } else if (state.solution){
                return {
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
                    value: String(action.payload),
                    solution: false
                }
            }else {
                return {
                    ...state,
                    value: String(action.payload)
                }
            }
        },
        decimalDisplay: (state, action)=>{
            if(!isDecimal.test(state)){
                return {
                    ...state,
                    value: state.value.concat(action.payload),
                }
            }
        },
        equalsDisplay: (state, action)=>{
            return {
                value: String(action.payload),
                solution: true
            }
        }
    }
 
})
export const {equalsDisplay, numberDisplay, overwrite, decimalDisplay} = displaySlice.actions;
export default displaySlice.reducer;