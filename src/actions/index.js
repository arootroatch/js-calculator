


export const setValues = (value) =>{
    return{
        type: "STORE_VALUE",
        payload:{
            value: value
        },
    }
}

export const clearValues = (value) =>{
    return{
        type: "CLEAR",
        payload:{
            value: value
        }
    }
}

export const swapOperator = (value) =>{
    return{
        type: "SWAP_OP",
        payload:{
            value:value
        }
    }
}
export const swapZero = (value) =>{
    return{
        type: "SWAP_ZERO",
        payload:{
            value:value
        }
    }
}

export const swapTwoOps = (value) =>{
    return{
        type: "SWAP_TWO_OPS",
        payload:{
            value:value
        }
    }
}




