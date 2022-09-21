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
    <NavBar/>      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="Home" element={<div>Home</div>}/>
        <Route path="Contact" element={<div>Contact</div>}/>
        <Route path="About" element={<div>About</div>}/>
        <Route path="News" element={<div>News</div>}/>
        <Route path="detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
      <ItemListContainer getProduct/>
      <ItemCount stock={7} initial={1} onAdd={handleOnAdd} />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;