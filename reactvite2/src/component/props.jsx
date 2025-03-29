import React from 'react'

export const UserInfo = ({ name='unknown', work='not working'}) => { 
  return (
    <div>
      <div className='bg-green-500 p-4 text-white rounded-lg shadow-md flex content-center max-w-full'>
        <h3>Hello, my name is {name} and I am a {work}.</h3>
      </div>
    </div>  
  )
}