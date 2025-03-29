import { useState,useCallback,useEffect,useRef} from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password,setPassword]=useState('')
  const [length,setLength]=useState(8);
  const [numbers,numberAllowed]=useState(false)
  const [chars,charAllowed]=useState(false);

  const GeneratePassword=useCallback(()=>{
    let pass="";
    let char="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(charAllowed) char+="!@#$%^&*";
    if(numberAllowed) char+="0123456789"
    for(let i=0; i<length; i++){
       let index=Math.floor(Math.random()*char.length);
       console.log(index)
       pass+=char[index];
    }
    
    setPassword(pass);
  },[length,charAllowed,numberAllowed]);

  useEffect(()=>{
    GeneratePassword()
  },[length,numbers,chars]);

  const passwordRef=useRef();

  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center bg-gray-500'>
         <div className='w-md flex flex-col items-center gap-2.5 pt-5'>
          <h1>Password Generator</h1>
          <div className='w-full flex justify-center'>
            <input className='outline-none rounded-l-xl bg-white min-w-full cursor-pointer' type="text" value={password} placeholder='password' ref={passwordRef}/> 
            <button className='bg-blue-600 p-1 rounded-r-xl cursor-pointer' onClick={copyPasswordToClipboard} >Copy</button>
          </div>
          <div className='flex w-full justify-between'>
            <input type="range" max={20} min={8} value={length} onChange={(e)=>{
              setLength((prev)=>prev=e.target.value)
            }}/>
            <p>Length: {length}</p>
             <div>
             <input type="checkbox" defaultChecked={numbers} id="number" onChange={()=>{
              numberAllowed((prev)=>prev=!prev)
             }}/>
             <label htmlFor="number">Numbers</label>
             </div>
             <div>
             <input type="checkbox" defaultChecked={chars} id="char" onChange={()=>{
              charAllowed((prev)=>prev=!prev)
             }}/>
             <label htmlFor="char">Characters</label>
             </div>
          </div>
         </div>
      </div>
    </>
  )
}

export default App
