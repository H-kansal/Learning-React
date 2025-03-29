import React from 'react'

export const InputBox = ({
    label,
    amount=0,
    currencyType,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    currencyDisable=false,
    amountDisable=false
}) => {
  return (
    <div className='w-2xs flex justify-between bg-white rounded-xl p-1'>
       <div className='flex flex-col gap-1'>
       <label htmlFor="amount">{label}</label>
       <input className='outline-none border border-gray-300 rounded-sm' type="number" id='amount' value={amount} disabled={amountDisable} onChange={(e)=>(onAmountChange(Number(e.target.value)))}/>
       </div>
       <div className='flex flex-col'>
        <label htmlFor="currency">Currency</label>
        <select className='outline-none border border-gray-300 rounded-sm cursor-pointer' name="currency" id="currency" value={currencyType} disabled={currencyDisable} onChange={(e)=>(onCurrencyChange(e.target.value))}>
            {currencyOptions.map((curr)=>{
                return <option value={curr}>{curr}</option>
            })}
        </select>
       </div>
    </div>
  )
}
