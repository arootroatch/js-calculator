
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { overwrite } from "../reducers/displayReducer";
import { clear } from "../reducers/valuesReducer";

export default function Clear(){

    const dispatch = useDispatch();
    const clearValue = () =>{
        dispatch(overwrite("0"));
        dispatch(clear("0"));
    }

    const onKeyDown = (e) => {
        if(e.key === "Backspace" || e.key === "Delete"){
            document.getElementById('clear').click();
        }
    }

    useEffect(()=>{
        document.addEventListener('keydown', onKeyDown);
        return ()=> document.removeEventListener('keydown', onKeyDown);
    })

    return(
        <button id='clear' onClick={()=>clearValue()}>AC</button>
    )
}
