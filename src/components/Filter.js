import React, { Component } from 'react'
import {connect} from 'react-redux'
import {filterProductsBySize, sortProductsByPrice} from '../actions/jeanActions'

class Filter extends Component {

    render() {

        return (
            <div style={{'float':'left'}} className="container">
                <div style={{'float':'left'}} className="order-by-price">
                    <label>Order by price
                        <select className="form-control" value={this.props.sort} onChange={(e) => this.props.sortProductsByPrice((this.props.filteredBySize ? this.props.filteredProducts : this.props.jeans), e.target.value)}>
                            <option value=""></option>
                            <option value="lowest to highest">lowest to highest</option>
                            <option value="highest to lowest">highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div style={{'float':'left'}} className="search-by-size">
                    <label>Search by size
                        <select className="form-control" value={this.props.size} onChange={(e) => this.props.filterProductsBySize((this.props.orderedByPrice && e.target.value.length ? this.props.filteredProducts : this.props.jeans), e.target.value)}>
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
        size: state.products.size,
        orderedByPrice: state.products.orderedByPrice,
        filteredBySize: state.products.filteredBySize
    }
}

export default connect(mapStateToProps, {filterProductsBySize, sortProductsByPrice})(Filter)
