import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { overwrite, concat } from "../reducers/displayReducer";
import { storeValue, clear, swapOps, swapTwoOps, swapZero, } from "../reducers/valuesReducer";


export default function Button(props){
    function onKeydown(e){
        if(e.key === props.code){
            document.getElementById(props.id).click();
        }
    }
    useEffect(()=>{
        document.addEventListener("keydown", onKeydown);
        return()=>{
            document.removeEventListener("keydown", onKeydown);
        }
    },)

    const valueString = useSelector((state)=>state.values);
    const displayString = useSelector((state)=>state.display);
    
    function handleValue(arg){
        const isOperator = new RegExp(/[-+*/]/); 
        const endsOperator = new RegExp(/[\+=\-/\*]$/);
        const isNumber = new RegExp(/[0-9]/);
        const isSolution = new RegExp(/=/);
        const isDecimal = new RegExp(/\./g);


        if (isNumber.test(arg)){
            if (valueString.slice(0,1)==='0'){
                dispatch(swapZero(arg));
                dispatch(overwrite(arg));
            } else if(endsOperator.test(valueString)){
                dispatch(overwrite(arg));
                dispatch(storeValue(arg));
            } else if(isSolution.test(valueString)){
                dispatch(overwrite(arg));
                dispatch(clear(arg));
            } else{
                dispatch(concat(arg));
                dispatch(storeValue(arg));
            }
        } else if (isOperator.test(arg)){
            if (!endsOperator.test(valueString)){
                if(isSolution.test(valueString)){
                    dispatch(clear(`${valueString.slice((valueString.indexOf('=')+1))}${arg}`));
                } else {
                    dispatch(storeValue(arg));
                }   
                dispatch(overwrite(arg));
            } else if (endsOperator.test(valueString)){
                if(valueString.slice(-1) !== arg){ 
                    if(arg === '-'){
                        dispatch(storeValue(arg));
                    } else
                    if (isOperator.test(valueString.slice(-2,-1))){
                        dispatch(swapTwoOps(arg));
                    } else {
                        dispatch(swapOps(arg));
                    }
                    dispatch(overwrite(arg));
                }
            }
        } else if (arg === '.' && !isDecimal.test(displayString)){
            dispatch(concat(arg));
            dispatch(storeValue(arg));
        }
            
    }

    const dispatch = useDispatch();

    return(
        <button className={props.className} id={props.id} onClick={()=>handleValue(props.value)}>{props.value}</button>
    )

}