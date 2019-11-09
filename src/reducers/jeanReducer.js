export default function jeanReducer(state={jeans:[], filteredProducts: [], size: '', sortFilter: ''}, action){
    switch(action.type){

        case 'FETCH_JEANS':
            return {...state, jeans: action.payload.jeans, filteredProducts: action.payload.jeans}

        case 'FILTER_BY_SIZE':
            return {...state, filteredProducts: action.payload.filteredProducts, size: action.payload.size}

        case 'SORT_BY_PRICE':
            return {...state, filteredProducts: action.payload.filteredProducts, sortFilter: action.payload.sortFilter}
        
        default:
            return state;
    }
}