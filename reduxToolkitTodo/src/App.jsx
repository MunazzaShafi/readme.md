import { useState } from 'react'
import './index.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos'

function App() {


  return (
    <>
     <h1>Learn Reduxtoolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
