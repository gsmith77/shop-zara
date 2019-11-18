import React from 'react';
import { Link } from 'react-router-dom'
import Filter from './Filter'
import Dropdown from 'react-bootstrap/Dropdown'



 const Navbar = ()=>{
    return(
        <div class="navbar-fixed">
            <nav className="nav-wrapper">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Shop Zara</Link>
                    
                    <ul className="right hide-on-med-and-down">
                        <Dropdown style={{'float':'left'}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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