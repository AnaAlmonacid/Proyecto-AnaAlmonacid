import logo from '../logo.svg';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = "navbarContainer">
            <div className='navBarItems'>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className='titulo'>Mi Tienda</h1>
{/*                 <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/News">News</Link></li> */}
                <CartWidget/>
                </div> 
            </div> 
    )
}

export default NavBar;