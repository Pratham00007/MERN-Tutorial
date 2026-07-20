import React from 'react'
import { useState } from 'react'

const Counter = () => {

 const [intial,after]=useState(0);
//  count,setCount is professional
// 0 is starting value

  return (
    <div className='counter-container'>
        <p id="counter-para">You have clicked buttons {intial} Times</p>
        <button id='inc' onClick={()=>{after(intial+1)}}>Inc</button>
        <button id='dec' onClick={()=>{after(intial-1)}}>Dec</button>
        <button id='reset' onClick={()=>{after(0)}}>Reset</button>
      
    </div>
  )
}

export default Counter
