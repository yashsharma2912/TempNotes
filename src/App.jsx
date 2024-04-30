import { useState } from 'react'
import "./style.scss"
import Navbar from './Components/Navbar'
import CardLayout from './Components/CardLayout'

function App() {
 

  return (
    <>
    <div className="main">
      <Navbar/>
      <h1>TempNotes</h1>
      <CardLayout/>
    </div>
    </>
  )
}

export default App
