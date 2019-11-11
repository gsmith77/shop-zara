import React, { Component } from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions/cartActions'

class Cart extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div>
                {cartItems.length === 0 ? <div style={{'float': 'right'}}>Cart is empty</div> :
                    <div style={{'float': 'right'}} className="column">
                        Currently {cartItems.length} product(s) in your cart
                        <ul>
                        {cartItems.map(item => (
                                <li key={item.id}>
                                    {item.title} x {item.count} = ${(item.price*item.count).toFixed(2)}
                                    <button className="btn btn-danger"
                                    onClick={() => this.props.removeFromCart(this.props.cartItems, item)}
                                    >X</button>
                                </li>
                            ))}
                        </ul>
                        Total: ${cartItems.reduce((a,b) => a + b.price*b.count, 0).toFixed(2)}
                    </div> 
                }
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cart
    }
}


export default connect(mapStateToProps, {removeFromCart})(Cart)
