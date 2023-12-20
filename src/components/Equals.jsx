import { useDispatch, useSelector } from "react-redux";
import { setValues, overwriteDisplay } from "../actions";
import { useRef, useEffect } from "react";

export default function Equals(){
   
    const dispatch = useDispatch();
    const valueString = useSelector((state)=>state.values);
    const answer = useRef('');
    const endsOperator = new RegExp(/[\+=\-/\*]$/);

    const equals = () => {
        if(!endsOperator.test(valueString)){
            answer.current = String(eval(valueString));
            dispatch(setValues(`=${answer.current}`));
            dispatch(overwriteDisplay(answer.current));
        }
    }
    const onKeyDown = (e) => {
        if (e.key === "=" || e.key === "Enter"){
            document.getElementById('equals').click();
        }
    }

    useEffect(()=>{
        document.addEventListener('keydown', onKeyDown);
        return ()=> document.removeEventListener('keydown', onKeyDown);
    })

    return(
        <button className='operator' id='equals' onClick={()=>equals()}>=</button>
    )
}