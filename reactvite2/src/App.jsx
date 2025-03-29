import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserInfo } from './component/props.jsx' 

function App() {
  return (
    <>
       <UserInfo name='Himanshu' work='Software Engineer' />
       <UserInfo name='tanmay' work='Software Engineer' />
    </>
  )
}

export default App
