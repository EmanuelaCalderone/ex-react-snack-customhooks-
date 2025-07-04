import useSwitch from "./useSwitch"
import { useState } from 'react'
import './App.css'

function App() {
  const [isOn, toggle] = useSwitch()

  return (
    <div>
      <h1>Valore: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  )
}

export default App
