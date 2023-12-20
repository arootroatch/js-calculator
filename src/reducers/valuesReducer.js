const initialState = "0";

const valuesReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'STORE_VALUE':
            return state.slice(0).concat(action.payload.value);
        case 'CLEAR':
            return String(action.payload.value);
        case 'SWAP_OP':
            return state.replace(/[\+=\-/\*]$/, action.payload.value);
        case 'SWAP_TWO_OPS':
            return state.slice(0,-2).concat(action.payload.value);
        case 'SWAP_ZERO':
            return state.replace(/^0/, action.payload.value);
        // case 'SOLUTION':
            // return state.slice((state.indexOf("=")+1))    
        default:
            return state; 
    }
}
export default valuesReducer;