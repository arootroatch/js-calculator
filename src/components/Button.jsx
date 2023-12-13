import { useEffect } from "react";

export default function Button(props){
    function onKeydown(e){
        if(e.code === props.code){
            document.getElementById(props.id).click();
        }
    }
    useEffect(()=>{
        document.addEventListener("keydown", onKeydown);
        return()=>{
            document.removeEventListener("keydown", onKeydown);
        }
    },
    )
    return(
        <button className={props.className} id={props.id}>{props.value}</button>
    )

}