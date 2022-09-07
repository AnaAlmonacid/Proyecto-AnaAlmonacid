import { useState } from "react"
import React from 'react'

const ItemCounter = () => {
  const [InitialState, setInitialState] = useState(1);
  
  const suma = () => {
    InitialState < stock  ? setInitialState (InitialState + 1) : alert ("Se agotó el stock")
  }

  const resta = () => {
    InitialState > 0 ? setInitialState (InitialState - 1) : alert ("No ingresar valores negativos")
  }

  let stock = 10
  
  return (
    <div>
      ItemCounter
      <h4>{InitialState}</h4>
      <button onClick={suma}>+1</button>
      <button onClick={resta}>-1</button>
    </div>
  )
}

export default ItemCounter
