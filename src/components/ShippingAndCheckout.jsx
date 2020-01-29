import React, { Component } from 'react';
import PurchaseButton from './PurchaseButton'
import { Button } from 'antd';
import {Elements, StripeProvider} from 'react-stripe-elements';

export default class ShippingAndCheckout extends Component {

    componentWillUnmount = (total) => {
        return this.refs.shipping.checked ? total -= 6.00 : null
    }


    handleChecked = (e, total) => {
        return e.target.checked ? total += 6.00 : total -+ 6.00
    }

    render() {
        let total = this.props.cartItems.reduce((total, product) => total + product.price*product.count, 0).toFixed(2)
        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange={(e) => this.handleChecked(e, total)} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                    <li className="collection-item"><b>Total: ${total}</b></li>
                </div>
                <StripeProvider apiKey="pk_test_WFCmvstVaW21fcxhEtoVuHUY00VQZnhBlD">
                    <Elements>
                        <PurchaseButton price={total} />
                    </Elements>
                </StripeProvider>
            </div>
        )
    }
}
