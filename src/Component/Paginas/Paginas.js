import { Routes, Route } from "react-router-dom"
import Inicio from "../Inicio/Inicio"
import ProductList from "../Products/ProductList"

const Paginas = () => {
  return (
    <div>                
        <ProductList/>
            <Routes>
                <Route path="/" exact component={Inicio}/>
                <Route path="/Products" exact component={ProductList}/>
            </Routes>
    </div>
  )
}

export default Paginas