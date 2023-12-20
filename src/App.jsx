
import data from './buttons.json';
import Button from './components/Button';
import Display from './components/Display';
import Equals from './components/Equals';
import Clear from './components/Clear';
import './stylesheets/App.css'



function App() {

  const buttons = data.map(data =>{
    return <Button key={data.id} className={data.className} id={data.id} code={data.code} value={data.value}></Button>
  })
  
  return (
    <div id="wrapper">
      <Display />
      <div id='grid-container'>
        <Clear/>
        {buttons}
        <Equals/>
      </div>
    </div>
  )
}

export default App
