export const addQuantityOfProductToCart = (items, product) => (dispatch) => {
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
    return dispatch({type:'INCREASE_PRODUCT_QUANTITY', payload: {cartItems: cartItems}})
}

export const decreaseQuantityOfProductInCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().map(p => {    
        if(p.id === product.id && product.count > 0){
            product.count -= 1
        }
        return p
    }).filter(pro => pro.count === 0 ? false : true)

    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    return dispatch({type: 'DECREASE_PRODUCT_QUANTITY', payload: {cartItems: cartItems}})
}

export const removeItemFromCart = (items, product) => (dispatch) => {
    let cartItems = items.slice()

    const newItems = cartItems.filter(p => p.id !== product.id)
    
    localStorage.setItem('cartItems', JSON.stringify(newItems))
    
    return dispatch({type: 'REMOVE_ITEM', payload: {
        cartItems: newItems
    }})
}