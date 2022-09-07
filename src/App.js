import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCounter/ItemCounter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a mi página"}/>
      <Counter/>
    </div>
  );
}

export default App;
