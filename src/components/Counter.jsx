import React, { useContext, useEffect } from 'react'
import { CounterContext } from '../context/CounterContext'

export const Counter = () => {
    const {increment,decrement,count,setCount,reset} = useContext(CounterContext)
    

    useEffect(()=>{
        const saveCount =localStorage.getItem('count')

        if (saveCount !== null){
            setCount(Number(saveCount))
        } 
    },[setCount])

    useEffect(()=>{
        localStorage.setItem('count',count) 
    },[count])

   
    return (


    <div>
         <h1 >useContext Counter: {count}</h1>
      
    <button  style={{marginRight:"10px", fontSize:"20px"}} onClick={decrement}> - </button>
    <button style={{marginRight:"10px", fontSize:"20px"}} onClick={increment}> + </button>
    <button style={{marginRight:"10px", fontSize:"20px"}} onClick={reset}> Reset </button>
   
    </div>)
}
