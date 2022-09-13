import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const handleOnAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`);
  };

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a mi página"} />
      <ItemCount stock={10} initial={1} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;