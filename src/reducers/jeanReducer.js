export default function jeanReducer(state={jeans:[], filteredProducts: [], size: '', sortFilter: '', orderedByPrice: false, filteredBySize: false}, action){
    switch(action.type){

        case 'FETCH_JEANS':
            return {...state, jeans: action.payload.jeans, filteredProducts: action.payload.jeans}

        case 'SORT_BY_PRICE':
            return {...state, filteredProducts: action.payload.filteredProducts, sortFilter: action.payload.sortFilter, orderedByPrice: true}
        
        case 'FILTER_BY_SIZE':
            return {...state, filteredProducts: action.payload.filteredProducts, size: action.payload.size, filteredBySize: true}
        
        case 'REMOVE_PRICE_FILTER':
            return {...state, filteredProducts: action.payload.filteredProducts, sortFilter: action.payload.sortFilter, orderedByPrice: false}        
    
        case 'REMOVE_SIZE_FILTER':
            return {...state, filteredProducts: action.payload.filteredProducts, size: action.payload.size, filteredBySize: false}
        
        default:
            return state;
    }
}