import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //Hook Logic
  let [counter,setCounter] = useState(5)
  let count=0
 
   const addValue =()=>{
         if(counter<20){
          setCounter(preCounter=>preCounter+1)
           setCounter(preCounter=>preCounter+1)
            setCounter(preCounter=>preCounter+1)
             setCounter(preCounter=>preCounter+1)
         }
    
    
  }
    
  

   const removeValue=()=>{
      if(counter>=1){
        setCounter(counter-1)
      }
    
    
   }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value={counter}</h2>
     <button onClick={addValue}
     >Add Value {counter}</button><br/>
     <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
