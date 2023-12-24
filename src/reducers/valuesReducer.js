import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "0",
    decimal: false,
    solution: false,
}

const endsOperator = new RegExp(/[\+=\-/\*]$/);
const isOperator = new RegExp(/[-+*/]/); 

const valuesSlice = createSlice({
    name: 'values',
    initialState,
    reducers: {
        numberValues: (state, action) =>{
            if (state.value.slice(0,1)==='0'){
                return {
                    ...state,
                    value: state.value.replace(/^0/, action.payload),
                }
            } else if (state.solution){
                return {
                    ...state,
                    solution: false,
                    value: String(action.payload),
                }
            } else {
                return {
                    ...state,
                    value: state.value.concat(action.payload)
                }
            }
        },
        operatorValues: (state, action)=>{
            if(!endsOperator.test(state.value)){
                if(state.solution){
                    return {
                        solution: false,
                        decimal: false,
                        value: `${state.value.slice((state.value.indexOf('=')+1))}${action.payload}`
                    }
                } else {
                    return {
                        ...state,
                        decimal: false,
                        value: state.value.concat(action.payload),
                    }
                }
            } else {
                if(state.value.slice(-1) !== action.payload){
                    if (action.payload === '-'){
                        return {
                            ...state,
                            decimal: false,
                            value: state.value.concat(action.payload),                   
                        }
                    } else if (isOperator.test(state.value.slice(-2,-1))) {
                        return {
                            ...state,
                            decimal: false,
                            value: state.value.slice(0,-2).concat(action.payload)
                        }
                    } else {
                        return {
                            state,
                            decimal: false,
                            value: state.replace(/[\+=\-/\*]$/, action.payload)
                        }
                    }
                }
            }
        },
        equalsValue: (state, action)=>{
            return {
                solution: true,
                decimal: false,
                value: state.value.concat(action.payload),
            }
        },
        decimalValues: (state, action)=>{
            if(!state.decimal && !state.solution){
                return {
                    ...state,
                    value: state.value.concat(action.payload),
                    decimal: true,
                }
            } else {
                return state;
            }
        },
        
        clear: (state, action)=>{
            return {
                solution: false,
                decimal: false,
                value: String(action.payload)
            }
        },
    }
})
export const {decimalValues ,numberValues, operatorValues, equalsValue, clear } = valuesSlice.actions;
export default valuesSlice.reducer;