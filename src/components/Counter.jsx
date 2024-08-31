import React, { useContext } from 'react'
import { CounterContext } from './Context'

export const Counter = () => {
    const {increment,decrement,count} = useContext(CounterContext)
  return (
    <div>
      {(count > 10 || count < 0) && (
         <h3 style={{ color: "red" }}>Limit Reached</h3>
            )}  
    <h1 >COUNT: {count}</h1>
    <button style={{marginRight:"10px", fontSize:"20px"}} onClick={increment}> + </button>
    <button  style={{marginRight:"10px", fontSize:"20px"}} onClick={decrement}> - </button>

   
    </div>)
}
