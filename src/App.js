import "./App.css";
import NavBar from "./Component/NavBar";
import ProductList from "./Component/Products/ProductList";
import { BrowserRouter} from "react-router-dom";
import Paginas from "./Component/Paginas/Paginas";
import { DataProvider } from "./Component/Context/DataProvider";
import Cart from "./Component/Cart/Cart";


const App = () => {
  return (
    <DataProvider>
    <div className="App">
    <BrowserRouter>   
    <NavBar/>
    <Cart/>
    <Paginas/>
    </BrowserRouter>
    </div>
    </DataProvider>
  )
}

export default App