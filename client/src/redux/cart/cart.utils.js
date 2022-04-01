export const addItem = (existingCart, itemToAddToCart) => {
    const existingItem = existingCart.find(cartItem => cartItem.id === itemToAddToCart.id);

    if(existingItem) {
        return existingCart.map(item => {
            return item.id === itemToAddToCart.id ? 
            {...item, quantity: item.quantity + 1} :
            item
        })
    }
    else {
        return [...existingCart, {...itemToAddToCart, quantity: 1}]
    }
}

export const clearItem = (existingCart, itemToClearFromCart) => {
    return existingCart.filter(cartItem => itemToClearFromCart.id !== cartItem.id)
}

export const removeItem = (existingCart, itemToRemoveFromCart) => {
    const existingItem = existingCart.find(cartItem => itemToRemoveFromCart.id === cartItem.id);

    if(existingItem === 1) 
        return clearItem(existingCart, itemToRemoveFromCart); 

    return existingCart.map(cartItem => 
        cartItem.id === itemToRemoveFromCart.id 
        ? ({...cartItem, quantity: cartItem.quantity-1}) 
        : (cartItem)        
    )
}