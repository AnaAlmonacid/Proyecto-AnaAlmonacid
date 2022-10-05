import { useContext } from "react"
import { cartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {
    const {cart, removeProduct} = useContext(cartContext);
    console.log('Cart', cart)
    
    const createOrder = () =>{
        const db = getFirestore();
        const order = {
        Buyer: {
            Name: "Pablo",
            Email: "Pablo@buyer.com.ar",
            Phone: 3416621453,
        },
        items: cart,
        total: cart.reduce((prev , valorActual) => 
        prev + valorActual.price * valorActual.cantidad, 
        0),
        };
        const queryOrder = collection(db , 'orders');
        addDoc(queryOrder, order)
        .then(({id}) =>{
        console.log(id);
        alert('Compra realizada.');
        })
        .catch((error) => 
        alert('Error al realizar la compra, intente de nuevo mas tarde.'))
    }
    
    return (
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (
            <div>
            <h2>Carrito vacio</h2>
            <Link to='/'><button>Comprar de nuevo</button></Link>
            </div>
            )
            :
            (
                <>
                {cart.map((product) =>(
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title}/> 
                    <p>{product.price}</p>
                    <p>{product.cantidad}</p>
                    <button onClick={()=> removeProduct(product.id)}>Eliminar producto</button>
                </div>
            ))}
                </>
            )}
        </div>
    )
}

export default Cart