import React from 'react';
import { Link } from 'react-router-dom'
import {filterProductsBySize, sortProductsByPrice} from '../actions/jeanActions'
import Dropdown from 'react-bootstrap/Dropdown'
import { connect } from 'react-redux';



 const Navbar = (props) => {
    return(
        <div className="navbar-fixed">
            <nav className="nav-wrapper">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Shop Zara</Link>
                    
                    <ul className="right hide-on-med-and-down">
                        <Dropdown id="filter-by-price" style={{'float':'left', 'paddingRight': '20px'}}>
                            <Dropdown.Toggle size="sm" variant="success" id="dropdown-basic">
                                Filter by Price
                            </Dropdown.Toggle>

                            <Dropdown.Menu size="sm" value={props.sortFilter} onClick={(e) => props.sortProductsByPrice((props.filteredBySize ? props.filteredProducts : props.jeans), e.target.value)}>
                                <Dropdown.Item as="button" value="" > ALL </Dropdown.Item>
                                <Dropdown.Item as="button" value="lowest to highest">lowest to highest</Dropdown.Item>
                                <Dropdown.Item as="button" value="highest to lowest">highest to lowest</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown id="order-by-size-filter" style={{'float':'left'}}>
                            <Dropdown.Toggle size="sm" variant="success" id="dropdown-basic">
                                Order by size
                            </Dropdown.Toggle>

                            <Dropdown.Menu value={props.size} onClick={(e) => props.filterProductsBySize((props.orderedByPrice && e.target.value.length ? props.filteredProducts : props.jeans), e.target.value)}>
                                <Dropdown.Item  as="button" value="" > ALL </Dropdown.Item>
                                <Dropdown.Item as="button" value={29} > 29 </Dropdown.Item>
                                <Dropdown.Item as="button" value={30}> 30 </Dropdown.Item>
                                <Dropdown.Item as="button" value={31} > 31 </Dropdown.Item>
                                <Dropdown.Item as="button" value={32}> 32 </Dropdown.Item>
                                <Dropdown.Item as="button" value={33} > 33 </Dropdown.Item>
                                <Dropdown.Item as="button" value={34}> 34 </Dropdown.Item>
                                <Dropdown.Item as="button" value={36} > 36 </Dropdown.Item>
                                <Dropdown.Item as="button" value={38} > 38 </Dropdown.Item>
                                <Dropdown.Item as="button" value={40}> 40 </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        jeans: state.products.jeans,
        filteredProducts: state.products.filteredProducts,
        sortFilter: state.products.sortFilter,
        size: state.products.size,
        orderedByPrice: state.products.orderedByPrice,
        filteredBySize: state.products.filteredBySize
    }
}

export default connect(mapStateToProps, {filterProductsBySize, sortProductsByPrice})(Navbar);