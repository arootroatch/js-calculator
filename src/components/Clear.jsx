
import { useDispatch } from "react-redux";
import { clearValues } from "../actions";
import { useEffect } from "react";
import { overwrite } from "../reducers/displayReducer";

export default function Clear(){

    const dispatch = useDispatch();
    const clear = () =>{
    dispatch(overwrite("0"));
    dispatch(clearValues("0"));
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
        <button id='clear' onClick={()=>clear()}>AC</button>
    )
}