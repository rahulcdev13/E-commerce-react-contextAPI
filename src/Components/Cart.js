import React, { useContext } from 'react'
import { CartContext } from "../Global/CartContext"

const Cart = () => {
    // const data = useContext(CartContext);
    // console.log(data);
    const { shoppingCart, totalPrice, Qty, dispatch } = useContext(CartContext);

    return (
        <>
            <div className='cart-container'>
                <div className='cart-details' style={{ marginTop: "100px" }}>
                    {shoppingCart.length > 0 ?
                        shoppingCart.map((cart) => {
                            return (
                                <>
                                    <div className="cart" key={cart.id}>
                                        <span className="cart-image">
                                            <img src={cart.image} alt="Not found" />
                                        </span>
                                        <span className="cart-product-name">
                                            {cart.name}
                                        </span>
                                        <span className="cart-product-price">${cart.price}.00 </span>
                                        <span className='inc'>  <i className="fa-solid fa-plus" onClick={() => dispatch({ type: 'INC', id: cart.id, cart})}></i></span>
                                        <span className='cart-product-qty'>{cart.Qty}</span>
                                        <span className='dec'><i className="fa-solid fa-minus"></i></span>
                                        <span className='cart-product-totalPrice'>${cart.price * cart.Qty}</span>
                                        <span className='delet-product'><i className="fa-solid fa-trash"></i></span>
                                    </div>
                                </>
                            )
                        })
                        : 'Sorry your cart is currently empty'}
                </div>
            </div> 
        </>
    )
}

export default Cart