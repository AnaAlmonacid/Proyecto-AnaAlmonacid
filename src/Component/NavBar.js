import logo from '../Images/Socks.png';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = "navbarContainer">
            <div className='navBarItems'>
                    <div className='navBarItem'><Link to="/Inicio">Inicio</Link></div>
                    <Link to={'#'}><img src={logo} className="App-logo" alt="logo"/></Link>
                    <div className='navBarItem'><Link to="/Products">Productos</Link></div>
                <CartWidget/>
            </div> 
        </div> 
    )
}

export default NavBar;