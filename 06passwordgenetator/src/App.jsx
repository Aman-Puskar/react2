import { useState , useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [length, setLength] = useState(6);
const [numberAllowed, setNumberAllowed] = useState(false);
const [characterAllowed, setCharacterAllowed] = useState(false);
const [password, setPassword] = useState("") //we will generate the password then display to the ui whenever the page is re-loaded.

//use ref hook
const passwordRef = useRef(null);


//password generator
 const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = 
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "1234567890";
  if (characterAllowed) str += "{}[]()_-=!@#$%^&*~|`";

  //loop to the pass for the length;
  for (let i = 1; i <= length; i++) {
    //getting the index of the character
    let char =Math.floor(Math.random() * str.length + 1);
    //adding the random char to the pass
    pass += str.charAt(char);

  }

  setPassword(pass); 

 }, [length, numberAllowed, characterAllowed, setPassword])


 const copyPassword = useCallback(() => {
  //select the password by the reference 
  passwordRef.current?.select();
  // when u want to select some portion of the text
  // passwordRef.current?.setSelectionRange(0, 3);

  window.navigator.clipboard.writeText(password);
 }, [password])


 //calling the method whenever there is a change in the dependency array
 useEffect(() => {
  passwordGenerator();
 }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-400 bg-gray-500'>
      <h1 className='text-4xl text-center text-black '>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 my-4 bg-yellow-100'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly 
        ref={passwordRef}
        />

        
        <button className='outline-none bg-blue-700 text-white
        px-3 py-0.5 shirnk-0 cursor-pointer hover:opacity-90 transition-opacity' 
        onClick={copyPassword}
        >copy</button>
        </div> 

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6}
             max={30}
             value={length}
             className='cursor-pointer'
             onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>

            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev); 
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
            
          </div>

          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox" 
            defaultChecked = {characterAllowed}
            id='characterInput'
            onChange={() => {
              setCharacterAllowed((prev) => !prev); 
            }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
 