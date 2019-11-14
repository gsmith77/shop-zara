import React from 'react'
import './Jeans.css'
import {connect} from 'react-redux'
import {fetchJeans} from '../../actions/jeanActions'
import {addToCart} from '../../actions/cartActions'
import { Link } from 'react-router-dom';

class Jeans extends React.Component{
    
    componentDidMount(){
        this.props.fetchJeans()
    }

    render(){
        const imgStyle = {
            'height': '480px',
            'width': '600px',
            'float': 'left'
        }
        
        const bStyle = {
            'float': 'left',
            'clear': 'both'
        }


        const productItems = this.props.filteredProducts.length ? (
            this.props.filteredProducts.map(jean => {
                return (
                    <div className="column" key={jean.desc}>
                        <Link onClick={() => localStorage.setItem('productID', JSON.stringify(jean.id))} to={`/view/${jean.id}`}>
                            <img style={imgStyle} src={`/products/jeans/${jean.images[0]}.jpg`} alt="product"/>

                        </Link>
                            <div>
                                <b style={bStyle}>${jean.price.toFixed(2)}</b> <b>{jean.title} </b>
                                <br/>
                                <br/>
                                <button className="btn btn-primary" onClick={() => this.props.addToCart(this.props.cartItems, jean)}>Add To Cart</button>
                            </div>
                    </div> 
                )})
            )
            : 
            this.props.jeans.map(jean => {
                return (
                <div className="column" key={jean.desc}>
                        <Link to={`/view/${jean.id}`}>
                            <img style={imgStyle} src={`/products/jeans/${jean.images[0]}.jpg`} alt="product"/>
                        </Link>
                    <div>                  
                        <b style={bStyle}>${jean.price.toFixed(2)}</b> <b>{jean.title}</b>
                        <br/>
                        <br/>
                        <button className="btn btn-primary" onClick={() => this.props.addToCart(this.props.cartItems, jean)}>Add To Cart</button>
                    </div>
                </div>
                )}
            )

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jeans: state.products.jeans,
        filteredProducts: state.products.filteredProducts,
        cartItems: state.cart.cart
    }
}


export default connect(mapStateToProps, {fetchJeans, addToCart})(Jeans)