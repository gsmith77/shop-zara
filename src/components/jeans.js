import React from 'react'
import './Jeans.css'
import {connect} from 'react-redux'
import {fetchJeans, addToCart} from '../actions/jeanActions'

class Jeans extends React.Component{
    
    componentDidMount(){
        this.props.fetchJeans()
    }
    render(){
        const imgStyle = {
            'height': '110%',
            'width': '110%',
            'clear': 'both'
        }
        
        const bStyle = {
            'float': 'left',
            'clear': 'both'
        }


        const productItems = this.props.filteredProducts.length ? (
            this.props.filteredProducts.map(jean => {
                return  (
                    <div className="column" key={jean.desc}>
                            <a href={`#${jean.id}`} onClick={() => this.props.addToCart(jean)}>
                                <img style={imgStyle} src={`/products/jeans/${jean.img}1.jpg`} alt="product"/>
                            </a>
                            <div>
                                <b style={bStyle} >${jean.price.toFixed(2)}</b> <b>{jean.title} </b>
                                <br/>
                                <br/>
                                <button className="btn btn-primary">Add To Cart</button>
                            </div>
                    </div> 
                )})
            )
            : 
            this.props.jeans.map(jean => {
                return (
                <div className="column" key={jean.desc}>
                    <img style={imgStyle} src={`/products/jeans/${jean.img}1.jpg`} alt="product"/>
                    
                    <b style={bStyle} >${jean.price.toFixed(2)}</b> <b>{jean.title}</b>
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
        filteredProducts: state.products.filteredProducts
    }
}


export default connect(mapStateToProps, {fetchJeans, addToCart})(Jeans)