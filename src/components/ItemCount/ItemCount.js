import { useState } from "react"
import React from 'react'

const ItemCounter = ({stock, initial, onAdd}) => {
  const [InitialState, setInitialState] = useState(initial);
  
  const suma = () => {
    InitialState < stock  ? setInitialState (InitialState + 1) : alert ("Se agotó el stock")
  }

  const resta = () => {
    InitialState > 0 ? setInitialState (InitialState - 1) : alert ("No ingresar valores negativos")
  }

  const handleOnAdd = () => {
    if (InitialState <= stock) onAdd(InitialState);
  };

  return (
    <div>
      <h4>{InitialState}</h4>
      <button onClick={suma}>+1</button>
      <button onClick={resta}>-1</button>
      <button onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter