export const setDisplay = (value) =>{
    return{
        type: 'GET_VALUE',
        payload:{
            value: value
        }
    }
}