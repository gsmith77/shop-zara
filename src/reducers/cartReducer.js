export default function cartReducer(state={cart:[]}, action){
    switch(action.type){

        case 'INCREASE_PRODUCT_QUANTITY':
            return {...state, cart: action.payload.cartItems}

        case 'DECREASE_PRODUCT_QUANTITY':
            return {...state, cart: action.payload.cartItems}

        case 'REMOVE_ITEM':
            return {...state, cart: action.payload.cartItems}
            
        default:
            return state
    }
}

// cartObject = {
//     product: Jean.title,
//     sizes: [],
//     colors: [],
//     price: 0
// }