import { useSelector } from "react-redux";

export default function Display(){
    const displayValue = useSelector((state)=>state.display.value);
    const valueString = useSelector((state)=>state.values.value);


    return(
        <div id="display-wrapper">
            <p>{valueString}</p>
            <p id="display">{displayValue}</p>
        </div>
    )
}