import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from "./components/Context/CartProvider";
import Cart from './components/Cart/Cart';


function App() {
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`);
  };

  return (
    <div className="App">
    <CartProvider>
      <BrowserRouter>
      <NavBar/>      
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="Home" element={<div>Home</div>}></Route>
          <Route path="Contact" element={<div>Contact</div>}></Route>
          <Route path="About" element={<div>About</div>}></Route>
          <Route path="News" element={<div>News</div>}></Route>
          <Route path='category/:category' element={<ItemListContainer/>}></Route>
          <Route path="detail/:id" element={<ItemDetailContainer/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;