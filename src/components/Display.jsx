import { useSelector } from "react-redux";

export default function Display(){
    const displayValue = useSelector((state)=>state.display);
    const valueString = useSelector((state)=>state.values);

    return(
        <div id="display-wrapper">
            <p>{valueString}</p>
            <p id="display">{displayValue}</p>
        </div>
    )
}