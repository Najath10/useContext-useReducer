import React, { useContext } from 'react'
import { CounterContext } from './Context'

export const Counter = () => {
    const {increment,decrement,count} = useContext(CounterContext)
  return (
    <div>

    <h1 >COUNT: {count}</h1>
    <button style={{marginRight:"10px", fontSize:"20px"}} onClick={increment}> + </button>
    <button  style={{marginRight:"10px", fontSize:"20px"}} onClick={decrement}> - </button>


    </div>)
}
