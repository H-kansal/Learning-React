import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const myApp=()=>{
//    return <div>
//       <p>Bhai san kuch badiya...</p>
//    </div>
// }

// const demo=(
//   <div>Hello bhai ham toh badiya hai</div>
// )

// const element=React.createElement(
//    'a',
//    {href:'#'},
//    'click'
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)