import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : 'Aman Puskar',
    age: 21
  };
  let newArr = [1, 3, 4, 5];

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>This is tailwind</h1>

    <Card username="Aman Puskar" obj = {myObj} arr = {newArr}  />
    <Card  />   
    </>
  )
}

export default App
