import { createContext, useState,  } from "react";

export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {

 const [count, setCount] = useState(0)
 const increment=()=>{
   
      setCount((prev)=>prev+1);
    }
  

  const decrement=()=>{
    setCount((prev)=>prev - 1);
  }
  const reset=()=>{
    setCount(0);
  }

  return <CounterContext.Provider value={{increment,decrement,count,setCount,reset}} >
    {children}
    </CounterContext.Provider>;
};
