export const setDisplay = (value) =>{
    return{
        type: 'GET_VALUE',
        payload:{
            value: value
        }
    }
}
export const setValues = (value) =>{
    return{
        type: "STORE_VALUE",
        payload:{
            value: value
        },
    }
}

export const clearValues = () =>{
    return{
        type: "CLEAR",
        payload:{
            value: ""
        }
    }
}