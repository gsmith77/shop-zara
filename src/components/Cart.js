import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {addQuantityOfProductToCart, decreaseQuantityOfProductInCart, removeItemFromCart} from '../actions/cartActions'
import ShippingAndCheckout from './ShippingAndCheckout'

class Cart extends Component{

    render(){
        const imgStyle = {
            'height': '280px',
            'width': '200px'
        }

        let cartItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <ul style={{'list-style-type': 'none'}}>
                            <li className="collection-item avatar" key={item.id}>
                                <div className="item-img"> 
                                    <img style={imgStyle} src={`/products/jeans/${item.images[0]}.jpg`} alt="item" className=""/>
                                </div>
                            
                                <div className="item-desc">
                                    <span className="title">{item.title}</span>
                                    <p>{item.desc}</p>
                                    <p><b>Price: ${item.price.toFixed(2)}</b></p> 
                                    <p>
                                        <b>Quantity: {item.count}</b> 
                                    </p>
                                    <div className="add-remove">
                                        <Link onClick={() => this.props.addQuantityOfProductToCart(this.props.items, item)} to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                                        <Link onClick={() => this.props.decreaseQuantityOfProductInCart(this.props.items, item)} to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                                    </div>
                                    <button onClick={() => this.props.removeItemFromCart(this.props.items, item)} className="waves-effect waves-light btn pink remove">Remove</button>
                                </div>
                            </li>                        
                        </ul>
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Your Cart:</h5>
                    <ul className="collection">
                        {cartItems}
                    </ul>
                    {/* <h5>Total: {this.props.items.reduce((total, product) => total + product.price*product.count, 0)}</h5> */}
                    <ShippingAndCheckout cartItems={this.props.items}/>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.cart.cart
    }
}

export default connect(mapStateToProps, {addQuantityOfProductToCart, decreaseQuantityOfProductInCart, removeItemFromCart})(Cart)