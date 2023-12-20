const initialState = '0';

const displayReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'OVERWRITE':
            return String(action.payload.value);
        case 'CONCAT':
            return state.slice(0).concat(action.payload.value);
        case 'SWAP_ZERO':
            return state.replace(/^0/, action.payload.value);
        default:
            return state; 
    }
}
export default displayReducer;