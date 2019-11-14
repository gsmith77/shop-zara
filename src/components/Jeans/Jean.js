import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'reactstrap';

class Jean extends Component {

    render() {

        const imgStyle = {
            'margin-right': '50%',
            'padding-bottom': '10px',
            'height': '480px',
            'width': '400px',
        }

        const productStyle = {
            'float': 'left'
        }

        const productId = this.props.browserFunctions.location.pathname.replace('/view/','')
        let i = this.props.jeans.findIndex((product) => product.id === parseInt(productId));
        let product = this.props.jeans[i]

        if (product === undefined) {
            console.log("Product not defined. Go back to Products Page '/' .") 
        }else{
            // debugger
            return (
                <Container>
                    <Col style={productStyle} className="product-images">
                        {product.images.map(pic => (
                            <Row>
                                <img style={imgStyle} src={`/products/jeans/${pic}.jpg`}/>
                            </Row>
                        ))}
                    </Col>
                    <button style={{'top': '10%', 'right': '10%'}} onClick={() => this.props.browserFunctions.history.goBack() && localStorage.removeItem('currentProduct')}>Go Back</button>
                    <Row>
                        <div style={{ 'float': 'center','margin-top': '40%'}}>
                            <label style={{'font-size': '20px','text-decoration': 'underline'}}>Title: </label> {product.title}
                            <br/>
                            <label style={{'font-size': '20px', 'text-decoration': 'underline'}}>Price:</label> <b>${product.price.toFixed(2)}</b>
                            <br/>
                            <label style={{'font-size': '20px', 'text-decoration': 'underline', 'paddingLeft': '10%', 'float': 'left'}}>Description:</label> <p style={{'padding-left': '50%', 'max-width': '400px'}}>{product.desc}</p>
                            <ul style={{'list-style-type': 'none'}}>
                            Sizes:
                            <br/>
                            {product.sizes.map(size => (
                                <li>
                                    {/* when you click on size it adds that jean with the pant size to the cart */}
                                    <a>{size}</a> 
                                </li>
                            ))}
                            </ul>
                        </div>
                    </Row>
                </Container>
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