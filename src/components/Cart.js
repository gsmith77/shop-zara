import React, { Component } from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions/cartActions'

class Cart extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div>
                {cartItems.length === 0 ? 'Cart is empty' : (
                    <div classname="column">
                        {cartItems.map(item => (
                            <div key={item.id}>
                                {item.title} x {item.count} = ${(item.price*item.count).toFixed(2)}
                                <button className="btn btn-danger"
                                onClick={() => this.props.removeFromCart(this.props.cartItems, item)}
                                >X</button>
                            </div>
                        ))}
                        Total: ${cartItems.reduce((a,b) => a + b.price*b.count, 0).toFixed(2)}
                    </div>
                )}
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
