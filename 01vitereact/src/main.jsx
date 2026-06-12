import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'
function MyApp(){
  return(
    <div>
      <h1>Hey! Musa Yousaf</h1>
    </div>
  )
}
const userName="Musa Yusaf"
const reactElement =React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me',
  userName
)

createRoot(document.getElementById('root')).render(

    reactElement
  
)
