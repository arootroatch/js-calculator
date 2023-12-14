import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplay, setValues } from "../actions";



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
        dispatch(setDisplay(arg));
        dispatch(setValues(arg));
    }
    
    const dispatch = useDispatch();

    return(
        <button className={props.className} id={props.id} onClick={()=>handleValue(props.value)}>{props.value}</button>
    )

}