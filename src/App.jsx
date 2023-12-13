
import data from './buttons.json';
import { useEffect, useState } from 'react'
import Button from './components/Button';
import './stylesheets/App.css'
import {useSelector} from 'react-redux';

function App() {

  const buttons = data.map(data =>{
    return <Button key={data.id} className={data.className} id={data.id} code={data.code} value={data.value}></Button>
  })


  const displayValue = useSelector((state)=>state.display);
  
  return (
    <div id="wrapper">
      <div id='display'>{displayValue}</div>
      <div id='grid-container'>
        <button id='clear'>AC</button>
        {buttons}
      </div>

    </div>
  )
}

export default App
