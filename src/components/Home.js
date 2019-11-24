import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchJeans} from '../actions/jeanActions'
import {addQuantityOfProductToCart} from '../actions/cartActions'

 class Home extends Component{

    componentDidMount = () => {
        this.props.fetchJeans()
    }

    render(){
        let itemList = this.props.filteredProducts.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={`/products/jeans/${item.images[0]}.jpg`} alt={item.title}/>
                            <span style={{'color': 'white'}}className="card-title">{item.title}</span>
                            <span onClick={() => this.props.addQuantityOfProductToCart(this.props.cartItems, item)} to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b className="price" data-testid="display-price">Price: ${item.price.toFixed(2)}</b></p>
                        </div>
                 </div>
            )
        })
        return(
            <div className="container">
                <h3 className="center">Latest Jeans From Zara</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.products.jeans,
      filteredProducts: state.products.filteredProducts,
      cartItems: state.cart.cart
    }
  }

export default connect(mapStateToProps, {fetchJeans, addQuantityOfProductToCart})(Home)
