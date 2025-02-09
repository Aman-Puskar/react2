import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

    const addValue =  () => {
      if (counter < 25) {
      counter += 1;
      setCounter(counter) 
      }
    }

    const decValue = () => {
      if (counter > 0) { 
        counter -= 1;
        setCounter(counter);
      }
    }

    const resetValue = () => {
      setCounter(counter - counter);
    }
  return (
    <>
    <h1>Hello, I am Aman</h1>
    <h3>counter: {counter}</h3>

    <button id='increase'
    onClick={addValue}
    >Increase value</button>
    <br/>

    <button id='decrease'
    onClick={decValue} 
    >Decrease value</button>
    <br />

    <button 
    onClick={resetValue}
    >Reset</button>

    </>
  )
}

export default App
