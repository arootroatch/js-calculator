
import data from './buttons.json';
import { useEffect } from 'react'
import Button from './components/Button';
import Display from './components/Display';
import Equals from './components/Equals';
import './stylesheets/App.css'
import {useDispatch} from 'react-redux';
import { setDisplay, clearValues } from './actions';

function App() {

  const buttons = data.map(data =>{
    return <Button key={data.id} className={data.className} id={data.id} code={data.code} value={data.value}></Button>
  })
  const dispatch = useDispatch();

 

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
        <Equals/>
      </div>

    </div>
  )
}

export default App
