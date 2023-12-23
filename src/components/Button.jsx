import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { numberDisplay, overwrite, decimalDisplay } from "../reducers/displayReducer";
import { decimalValues, numberValues, operatorValues } from "../reducers/valuesReducer";



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
    
    function handleValue(arg){

        const isOperator = new RegExp(/[-+*/]/); 
        const isNumber = new RegExp(/[0-9]/);

        if (isNumber.test(arg)){
            dispatch(numberDisplay(arg));
            dispatch(numberValues(arg));
          
        } else if (isOperator.test(arg)){
            dispatch(overwrite(arg));
            dispatch(operatorValues(arg));
       
        } else if (arg === '.'){
            dispatch(decimalDisplay(arg));
            dispatch(decimalValues(arg));
        }
            
    }

    const dispatch = useDispatch();

    return(
        <button className={props.className} id={props.id} onClick={()=>handleValue(props.value)}>{props.value}</button>
    )

}