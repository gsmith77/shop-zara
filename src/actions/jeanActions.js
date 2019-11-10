export const fetchJeans = () => (dispatch) => {
    fetch('http://localhost:8000/jeans')
    .then(resp => resp.json())
    .then(jeans => dispatch({type:'FETCH_JEANS', payload: {jeans:jeans}}))
}

export const filterProductsBySize = (items, size) => (dispatch) => {
    const products = items.slice();

    dispatch({type:'FILTER_BY_SIZE', payload: {
        filteredProducts: products.filter(product => {return product.sizes.includes(parseInt(size))}),
        size: size
        }
    })
}

export const sortProductsByPrice = (items, sortFilter) => (dispatch) => {
    const products = items.slice();

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