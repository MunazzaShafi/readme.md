import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
  import React from "react";
  import Card from './Components/Card'



function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName:"Musa",
    age:35
  }
  let Arr=[1,2,3,4]
  return (
    <>
     <h1 className='bg-blue-400 text-black p-4 rounded-xl'>TailwindCSS Test</h1>
       <Card userName="Devweekend" btnText="more Info" />
       <Card userName="Yousaf" />
  


    </>
  )
}

export default App
