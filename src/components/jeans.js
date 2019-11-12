import React from 'react'
import './Jeans.css'
import {connect} from 'react-redux'
import {fetchJeans} from '../actions/jeanActions'
import {addToCart} from '../actions/cartActions'

class Jeans extends React.Component{
    
    componentDidMount(){
        this.props.fetchJeans()
    }
    render(){
        const imgStyle = {
            'height': '110%',
            'width': '110%',
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
                            <a href={`#${jean.id}`} onClick={() => this.props.addToCart(this.props.cartItems, jean)}>
                                <img style={imgStyle} src={`/products/jeans/${jean.img}1.jpg`} alt="product"/>
                            </a>
                            <div>
                                <b style={bStyle} >${jean.price.toFixed(2)}</b> <b>{jean.title} </b>
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
                    <a href={`#${jean.id}`} onClick={() => this.props.addToCart(this.props.cartItems, jean)}>
                        <img style={imgStyle} src={`/products/jeans/${jean.img}1.jpg`} alt="product"/>
                    </a>  
                    <div>                  
                        <b style={bStyle} >${jean.price.toFixed(2)}</b> <b>{jean.title}</b>
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