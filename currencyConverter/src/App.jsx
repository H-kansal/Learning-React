import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './component/InputBox.jsx'
import useCurrency from './hooks/useCurrency.js'


function App() {
  let [amount,setAmount]=useState(0);
  let [from,setFrom]=useState('usd');
  let [to,setTo]=useState('inr');
  let [convertAmount,setConvertAmount]=useState(0);

  let concurrencyInfo=useCurrency(from);
  let  options=Object.keys(concurrencyInfo);

  const convertCurrency=()=>{
     setConvertAmount(amount*concurrencyInfo[to]);
  }
  
  const swaping=()=>{
      setFrom(to);
      setTo(from);
  }

  return (
    <>
      <div className='flex justify-center items-center w-screen h-screen bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
        <div className='flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 '>
        <InputBox 
         label="from" amount={amount} onAmountChange ={(amount)=>(setAmount(amount))} onCurrencyChange={(currency)=>(setFrom(currency))} currencyType={from} currencyOptions={options}
         />
         <button className='bg-blue-500 p-1 rounded-xl cursor-pointer' onClick={swaping}>Swap</button>
          <InputBox 
         label="to" amount={convertAmount} onAmountChange ={(amount)=>(setConvertAmount(amount))} onCurrencyChange={(currency)=>(setTo(currency))} currencyType={to} currencyOptions={options} amountDisable={true}
         />
         <button className='bg-blue-800 p-1.5 rounded-md cursor-pointer' onClick={convertCurrency}>Convert Amount</button>
        </div>
    </div>
    </>
  )
}

export default App