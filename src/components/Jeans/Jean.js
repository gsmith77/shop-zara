import React, { Component } from 'react'
import {connect} from 'react-redux'


class Jean extends Component {

    render() {
        const productId = this.props.browserFunctions.location.pathname.replace('/view/','')
        let i = this.props.jeans.findIndex((product) => product.id === parseInt(productId));
        let product = this.props.jeans[i];

        if (product === undefined) {
            console.log('Loading products') 
        }else{
            return (
                <div>
                    {product.title}
                </div>
            )
        }

        return(
            <div>
      
            </div>
          )
    }
}


const mapStateToProps = state => {
    return {
        jeans: state.products.jeans
    }
}


export default connect(mapStateToProps)(Jean);