
import data from './buttons.json';
import { useEffect, useRef, useState } from 'react'
import Button from './components/Button';
import './stylesheets/App.css'
import {useDispatch, useSelector} from 'react-redux';
import { setDisplay, setValues, clearValues } from './actions';
import Display from './components/Display';

function App() {

  const buttons = data.map(data =>{
    return <Button key={data.id} className={data.className} id={data.id} code={data.code} value={data.value}></Button>
  })

  // const valueString = useSelector((state)=>state.values);
  const dispatch = useDispatch();

  const equals = () =>{
    if (valueString !== ""){
      eval(valueString);
    }
    dispatch(clearValues());
    dispatch(setDisplay(eval(valueString)));
    dispatch(setValues(eval(valueString)));
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
