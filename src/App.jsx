import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";
import { useState } from "react";
import './App.css'

function App() {
  const [isOn, toggle] = useSwitch()

  const currentDate = useDate()

  const customPointer = useCustomPointer(<span>🤪</span>)
  return (
    <>
      <div>
        <h1>Valore: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      <div>
        <h1>Muovi il mouse per vedere il cursore personalizzato</h1>
        {customPointer}
      </div>
    </>
  )
}

export default App
