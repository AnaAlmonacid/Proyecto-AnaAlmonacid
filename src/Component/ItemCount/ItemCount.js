import { useState } from "react"
import React from 'react'

const Counter = ({stock, initial, onAdd}) => {

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
            <h5>{stock}</h5>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <button onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    )
}

export default Counter