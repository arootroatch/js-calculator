import { useSelector, useDispatch } from "react-redux";

export default function Display(){
    const displayValue = useSelector((state)=>state.display);
    const valueString = useSelector((state)=>state.values);
    
    return(
        <div id='display'>
            <p>{valueString}</p>
            <p>{displayValue}</p>
        </div>
    )
}