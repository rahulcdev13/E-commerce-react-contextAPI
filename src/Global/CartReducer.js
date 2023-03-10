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
            console.log('Add to cart Increment');
            product = action.cart;
            product.Qty = product.Qty + 1;
            updatePrice = totalPrice + product.price;
            updateQty = Qty + 1;
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            shoppingCart[index] = product;
            return { shoppingCart: [...shoppingCart], totalPrice: updatePrice, Qty: updateQty }
            break;

        case 'DEC':
            console.log('Add to cart Decrement');

            product = action.cart;
            if (product.Qty > 1) {
                product.Qty = product.Qty - 1;
                updatePrice = totalPrice - product.price;
                updateQty = Qty - 1;
                index = shoppingCart.findIndex(cart => cart.id === action.id);
                shoppingCart[index] = product;
                return { shoppingCart: [...shoppingCart], totalPrice: updatePrice, Qty: updateQty }
            } else {
                return state
            }
            break;

        case 'DELETE':
            const filtered = shoppingCart.filter(product => product.id !== action.id);
            product = action.cart;
            updateQty = Qty - product.Qty;
            updatePrice = totalPrice - product.price * product.Qty;
            return { shoppingCart: [...filtered], totalPrice: updatePrice, Qty: updateQty }
            break;



        default:
            return state
    }

}