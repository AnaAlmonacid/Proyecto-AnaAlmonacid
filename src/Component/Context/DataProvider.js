import React, {useState, useEffect, createContext} from "react";
import data from "../MockData/MockData";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState ([])

useEffect(()=> {
    const product = data.items
    if (product) {}
    setProducts (product)
}, [])

const value = {
    products : [products],

}

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}
