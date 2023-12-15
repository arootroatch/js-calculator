
import data from './buttons.json';
import { useEffect, useRef, useSelector } from 'react'
import Button from './components/Button';
import './stylesheets/App.css'
import {useDispatch} from 'react-redux';
import { setDisplay, setValues, clearValues } from './actions';
import Display from './components/Display';

function App() {

  const buttons = data.map(data =>{
    return <Button key={data.id} className={data.className} id={data.id} code={data.code} value={data.value}></Button>
  })

  const value = useRef("");
  // const valueString = useSelector((state)=>state.values);
    // (_, b)=>{
    //   value.current = b;
    //   return true;
    // }
  
  const dispatch = useDispatch();

  const equals = () =>{
    if (value !== ""){
      eval(value.current);
    }
    dispatch(clearValues());
    dispatch(setDisplay(eval(value.current)));
    dispatch(setValues(eval(value.current)));
  }
 

  const clear = () =>{
    dispatch(setDisplay(0));
    dispatch(clearValues());
  }

  const onKeyDown = (e) => {
    if(e.key === "Backspace" || e.key === "Delete"){
      document.getElementById('clear').click();
    } else if (e.key === "=" || e.key === "Enter"){
      document.getElementById('equals').click();
    }
  }

  useEffect(()=>{
    document.addEventListener('keydown', onKeyDown);
    return ()=> document.removeEventListener('keydown', onKeyDown);
  })
  
  return (
    <div id="wrapper">
      <Display />
      <div id='grid-container'>
        <button id='clear' onClick={()=>clear()}>AC</button>
        {buttons}
        <button className='operator' id='equals' onClick={()=>equals()}>=</button>
      </div>

    </div>
  )
}

export default App
