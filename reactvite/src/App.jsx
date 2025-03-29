import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState()->hooks
  let [counter, setCount] = useState(0)
  
  const addclick=()=>{
    setCount((prevCounnter)=>prevCounnter+=1)
    //try to do pratical with one statement and then with multiple statements you find diff i.e. the counter is increase by one on each statement
    // setCount((prevCounnter)=>prevCounnter+=1)   // setCount return a callback that we can use to update the state
    // setCount((prevCounnter)=>prevCounnter+=1)

    // try to do pratical with one statement and then with multiple statements you find no diff i.e. the counter is only incresing by one 1 because it take it as whole 1
    // setCount(counter+1);
    // setCount(counter+1);
    // setCount(counter+1);
    // setCount(counter+1);
  }

  const redClick=()=>{
    setCount((prevCounnter)=>prevCounnter-=1)
    setCount((prevCounnter)=>prevCounnter-=1)
    setCount((prevCounnter)=>prevCounnter-=1)
    // setCount(counter-1)
    // setCount(counter-1)
    // setCount(counter-1)
    // setCount(counter-1)
  }
  return (
    <>
      <p className="">Hello learning react {counter}</p>
      <p>Counter is: {counter}</p>
      <button onClick={addclick}>Add click</button> {" "}
      <button onClick={redClick}>Reduce click</button>
    </>
  )
}

export default App