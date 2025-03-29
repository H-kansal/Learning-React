import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState('grey')
  const setColorRed=(color)=>{
     setColor(color)
    // setColor((prev)=>prev=color)
  }
   
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-end' style={{backgroundColor:color}}>
          <div className='flex gap-4 mb-15'>
            <button className='bg-red-600 p-3 rounded-3xl' onClick={()=>setColorRed('red')}>
              Red
            </button>
            <button className='bg-green-600 p-3 rounded-3xl' onClick={()=>setColorRed('green')}>
              Green
            </button>
            <button className='bg-blue-600 p-3 rounded-3xl' onClick={()=>setColorRed('blue')}>
              Blue
            </button>
          </div>
      </div>
    </>
  )
}

export default App
