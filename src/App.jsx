
import data from './buttons.json';
import { useEffect, useState } from 'react'
import Button from './components/Button';
import './stylesheets/App.css'
import {useDispatch, useSelector} from 'react-redux';
import { setDisplay } from './actions';

function App() {

  const buttons = data.map(data =>{
    return <Button key={data.id} className={data.className} id={data.id} code={data.code} value={data.value}></Button>
  })


  const displayValue = useSelector((state)=>state.display);
  const dispatch = useDispatch();
  const clear = () =>{
    dispatch(setDisplay(0));
  }
  useEffect(()=>{
    document.addEventListener('keydown', (e)=>{
      if(e.key === "Backspace" || e.key === "Delete"){
        document.getElementById('clear').click();
      }
    })
  })
  
  return (
    <div id="wrapper">
      <div id='display'>
        <p>{displayValue}</p>
        <p></p>
      </div>
      <div id='grid-container'>
        <button id='clear' onClick={()=>clear()}>AC</button>
        {buttons}
      </div>

    </div>
  )
}

export default App
