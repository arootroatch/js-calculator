import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setDisplay, setValues } from "../actions";



export default function Button(props){
    const endsInOperator = useRef(false);
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
        const regex = new RegExp(/[-+*/]/);
        console.log('operator',regex.test(arg));
        if (regex.test(arg)){
           if (endsInOperator.current === false){    
                endsInOperator.current = true
                console.log('endsOp',endsInOperator.current);
                dispatch(setDisplay(arg));
                dispatch(setValues(arg));
            }
        
        } else {
            if (endsInOperator.current){
                endsInOperator.current = false;
            }
            dispatch(setDisplay(arg));
            dispatch(setValues(arg));
        }
    }

    const dispatch = useDispatch();

    return(
        <button className={props.className} id={props.id} onClick={()=>handleValue(props.value)}>{props.value}</button>
    )

}