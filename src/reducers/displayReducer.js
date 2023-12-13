const initialState = 0;

const displayReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'GET_VALUE':
            return action.payload.value;
        default:
            return state; 
    }
}
export default displayReducer;