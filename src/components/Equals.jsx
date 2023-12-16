import { useDispatch, useSelector } from "react-redux";
import { clearValues, setDisplay, setValues } from "../actions";
import { useRef } from "react";

export default function Equals(){
   
    const dispatch = useDispatch();
    const valueString = useSelector((state)=>state.values);
    const answer = useRef('');

    const equals = () => {
        dispatch(clearValues());
        answer.current = eval(valueString);
        dispatch(setDisplay(answer.current));
        dispatch(setValues(answer.current));
    }

    return(
        <button className='operator' id='equals' onClick={()=>equals()}>=</button>
    )
}