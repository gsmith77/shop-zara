import React from 'react';
import { Link } from 'react-router-dom'
import Filter from './Filter'


 const Navbar = ()=>{
    return(
        <div class="navbar-fixed">
            <nav className="nav-wrapper">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Shop Zara</Link>
                    
                    <ul className="right hide-on-med-and-down">
                        {/* <Filter /> */}
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
        </div>
    )
}

export default Navbar;