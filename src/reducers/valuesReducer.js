const initialState = "";

const valuesReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'STORE_VALUE':
            return state.slice(0).concat(action.payload.value);
        case 'CLEAR':
            return action.payload.value
        default:
            return state; 
    }
}
export default valuesReducer;