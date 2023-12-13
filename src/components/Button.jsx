import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplay } from "../features/counter/displaySlice";

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
   

    return(
        <button className={props.className} id={props.id} onClick={()=>console.log(props.value)}>{props.value}</button>
    )

}