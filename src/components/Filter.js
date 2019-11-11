import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filterProductsBySize, sortProductsByPrice} from '../actions/jeanActions'

class Filter extends Component {

    render() {
        const colStyle = {
            'display': 'inline',
            'marginRight': '10%',
            'marginLeft': '0.5%'
        }
        return (
            <div style={{}} className="row">
                <div style={colStyle} className="col-md-4">
                    <h2>Search Bar</h2>
                </div>
                <div style={colStyle} className="col-md-4">
                    <label>Order by price
                        <select className="form-control" value={this.props.sort} onChange={(e) => this.props.sortProductsByPrice(this.props.filteredProducts, e.target.value)}>
                            <option value=""></option>
                            <option value="lowest to highest">lowest to highest</option>
                            <option value="highest to lowest">highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>Search by size
                        <select className="form-control" value={this.props.size} onChange={(e) => this.props.filterProductsBySize(this.props.jeans, e.target.value)}>
                            <option value="" ></option>
                            <option value={29} >29</option>
                            <option value={30} >30</option>
                            <option value={31} >31</option>
                            <option value={32} >32</option>
                            <option value={33} >33</option>
                            <option value={34} >34</option>
                            <option value={36} >36</option>
                            <option value={38} >38</option>
                            <option value={40} >40</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jeans: state.products.jeans,
        filteredProducts: state.products.filteredProducts,
        sortFilter: state.products.sortFilter,
        size: state.products.size
    }
}

export default connect(mapStateToProps, {filterProductsBySize, sortProductsByPrice})(Filter)
