export const CartReducer = (state, action) => {
    const { shoppingCart, totalPrice, Qty } = state;
    let product;
    let index;
    let updatePrice;
    let updateQty;

    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('Add to cart Case');
            const check = shoppingCart.find(product => product.id === action.id);
            if (check) {
                return state
            } else {
                product = action.product;
                product['Qty'] = 1;
                updateQty = Qty + 1;
                updatePrice = totalPrice + product.price;
                return { shoppingCart: [product, ...shoppingCart], totalPrice: updatePrice, Qty: updateQty }
            }
            break;

        case 'INC':
            console.log('Add to cart quantity');
            product = action.cart;
            product.Qty = product.Qty + 1;
            updatePrice = totalPrice + product.price;
            updateQty = Qty + product.Qty;
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            shoppingCart[index] = product;
            return{shoppingCart : [...shoppingCart], totalPrice:updatePrice,Qty:updateQty} 

        default:
            return state
    }

}