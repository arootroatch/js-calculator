
import data from './buttons.json';
import { useEffect, useState } from 'react'
import Button from './components/Button';
import './stylesheets/App.css'

function App() {

  const buttons = data.map(data =>{
    return <Button key={data.value} className={data.className} id={data.id} code={data.code} value={data.value}></Button>
  })

  
  
  return (
    <div id="wrapper">
      <div id='display'></div>
      <div id='grid-container'>
        {buttons}
      </div>

    </div>
  )
}

export default App
