export default function cartReducer(state={cart:[]}, action){
    switch(action.type){

        case 'ADD_TO_CART':
            return {...state, cart: action.payload.cartItems}

        default:
            return state
    }
}