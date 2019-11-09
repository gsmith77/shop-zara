import React from 'react'
import './Jeans.css'
import {connect} from 'react-redux'
import {fetchJeans} from '../actions/jeanActions'

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
        
        const pStyle = {
            'float': 'left'
        }

        const productItems = this.props.filteredProducts.length ? (
            this.props.filteredProducts.map(jean => {
                return  <div className="column" key={jean.desc}>
                        <img style={imgStyle} src={`/products/jeans/${jean.img}1.jpg`} alt="product"/>
                        <b style={pStyle} >${jean.price}</b> <b>{jean.title}</b>
                </div> 
            })
            )
            : 
            this.props.jeans.map(jean => {
                return (
                <div className="column" key={jean.desc}>
                    <img style={imgStyle} src={`/products/jeans/${jean.img}1.jpg`} alt="product"/>
                    <b style={pStyle} >${jean.price}</b> <b>{jean.title}</b>
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


export default connect(mapStateToProps, {fetchJeans})(Jeans)