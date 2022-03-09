export const addItemToCart = (existingCart, itemToAddToCart) => {
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