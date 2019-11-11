export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false
    //check if product is already in cart
    cartItems.forEach(p => {
        if(p.id === product.id){
            p.count += 1;
            productAlreadyInCart = true;
        }
    })
    
    if(!productAlreadyInCart){
        cartItems.push({...product, count: 1})
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    return dispatch({type:'ADD_TO_CART', payload: {cartItems: cartItems}})
}

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().map(p => {    
        if(p.id === product.id && product.count > 0){
            product.count -= 1
        }
        return p
    }).filter(pro => pro.count === 0 ? false : true)
    debugger

    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    return dispatch({type: 'REMOVE_FROM_CART', payload: {cartItems: cartItems}})
}