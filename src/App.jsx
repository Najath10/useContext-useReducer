import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { UseReduceCounter } from './reducer/UseReduceCounter'
import { UseReduceUseContext } from './components/UseReduceUseContext'

function App() {
  

  return (
   <>
    <Counter />
    <UseReduceCounter/>
    {/* <UseReduceUseContext/> */}
   </>
  )
}

export default App
