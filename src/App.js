import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`);
  };

  return (
    <div className="App">
{/*     <CartProvider> */}
    <BrowserRouter>
    <NavBar/>      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="Home" element={<div>Home</div>}></Route>
        <Route path="Contact" element={<div>Contact</div>}></Route>
        <Route path="About" element={<div>About</div>}></Route>
        <Route path="News" element={<div>News</div>}></Route>
        <Route path='category/:category' element={<ItemListContainer/>}></Route>
        <Route path="item/:id" element={<ItemDetailContainer/>}></Route>
      </Routes>
      <ItemListContainer getProduct/>
      <ItemCount stock={7} initial={1} onAdd={handleOnAdd} />
      <ItemDetailContainer/>
    </BrowserRouter>
{/*     </CartProvider> */}

    </div>
  );
}

export default App;