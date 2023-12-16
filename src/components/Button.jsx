import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay, setValues, swapOperator } from "../actions";



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
    
    function handleValue(arg){
        const regex1 = new RegExp(/[-+*/]/); //isOperator
        const regex2 = new RegExp(/[\+=\-/\*]$/) //ends in Operator
        console.log("valueString",valueString);
        console.log('isOperator',regex1.test(arg));
        if (regex1.test(arg)){
            if (!regex2.test(valueString)){    
                dispatch(setDisplay(arg));
                dispatch(setValues(arg));
            } 
            else {
                if(valueString.slice(-1) !== arg)
                dispatch(swapOperator(arg));
                dispatch(setDisplay(arg));
            }
        } else {
            console.log('number, no endsInOp change')
            dispatch(setDisplay(arg));
            dispatch(setValues(arg));
        }
    }

    const dispatch = useDispatch();

    return(
        <button className={props.className} id={props.id} onClick={()=>handleValue(props.value)}>{props.value}</button>
    )

}