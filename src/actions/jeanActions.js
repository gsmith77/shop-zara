export const fetchJeans = () => (dispatch) => {
    fetch('http://localhost:8000/jeans')
    .then(resp => resp.json())
    .then(jeans => dispatch({type:'FETCH_JEANS', payload: {jeans:jeans}}))
}

export const filterProductsBySize = (items, size) => (dispatch) => {
    const products = items.slice();
    if(!size.length){
        dispatch({type:'REMOVE_SIZE_FILTER', payload: {filteredProducts: products, size: size}})
    }else{
        const filteredJeans = products.filter(product => {return product.sizes.includes(parseInt(size))})
        dispatch({type:'FILTER_BY_SIZE', payload: {
            filteredProducts: filteredJeans,
            size: size
            }
        })
    }
}

export const sortProductsByPrice = (items, sortFilter) => (dispatch) => {
    //if products are ordered by price then use FilteredProducts
    const products = items.slice();
    
    !sortFilter.length ? dispatch({type:'REMOVE_PRICE_FILTER', payload: {filteredProducts: products, sortFilter: sortFilter}})
    :
    dispatch({type:'SORT_BY_PRICE', payload: {
        filteredProducts: products.sort((a,b) => {
            if(sortFilter === 'lowest to highest'){
                return a.price - b.price
            }
            else{
                return b.price - a.price
            }
        }),
        sortFilter: sortFilter}
    })
}