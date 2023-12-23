import { createSlice } from "@reduxjs/toolkit";

const initialState = "0";
const isSolution = new RegExp(/=/);
const endsOperator = new RegExp(/[\+=\-/\*]$/);
const isOperator = new RegExp(/[-+*/]/); 
const isDecimal = new RegExp(/\./g);

const valuesSlice = createSlice({
    name: 'values',
    initialState,
    reducers: {
        numberValues: (state, action) =>{
            if (state.slice(0,1)==='0'){
                return state.replace(/^0/, action.payload);
            } else if (isSolution.test(state)){
                return state = String(action.payload);
            } else {
                return state.concat(action.payload);
            }
        },
        operatorValues: (state, action)=>{
            if(!endsOperator.test(state)){
                if(isSolution.test(state)){
                    return state = `${state.slice((state.indexOf('=')+1))}${action.payload}`
                } else {
                    return state.concat(action.payload);
                }
            } else {
                if(state.slice(-1) !== action.payload){
                    if (action.payload === '-'){
                        return state.concat(action.payload);
                    } else if (isOperator.test(state.slice(-2,-1))) {
                        return state.slice(0,-2).concat(action.payload);
                    } else {
                        return state.replace(/[\+=\-/\*]$/, action.payload);
                    }
                }
            }
        },
        storeValue: (state, action)=>{
            return state.concat(action.payload);
        },
        decimalValues: (state, action)=>{
            if(!isDecimal.test(state)){
                return state.concat(action.payload);
            }
        },
        
        clear: (state, action)=>{
            return state = String(action.payload);
        },
    }
})
export const {decimalValues ,numberValues, operatorValues, storeValue, clear } = valuesSlice.actions;
export default valuesSlice.reducer;