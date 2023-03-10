import React, { useContext } from 'react'
import { CartContext } from "../Global/CartContext"
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {
    // const data = useContext(CartContext);
    // console.log(data);
    const { shoppingCart, totalPrice, Qty, dispatch } = useContext(CartContext);
    const handleToken = (token) =>{

    }

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
                                        <span className='inc'>  <i className="fa-solid fa-plus" onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}></i></span>
                                        <span className='cart-product-qty'>{cart.Qty}</span>
                                        <span className='dec'><i className="fa-solid fa-minus" onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}></i></span>
                                        <span className='cart-product-totalPrice'>${cart.price * cart.Qty}</span>
                                        <span className='delet-product'><i className="fa-solid fa-trash" onClick={() => dispatch({ type: "DELETE", id: cart.id, cart })}></i></span>
                                    </div>
                                </>
                            )
                        })
                        : 'Sorry your cart is currently empty'}
                </div>
                {shoppingCart.length > 0 ? <div className='cart-summary'>
                    <div className="summary">
                        <h3>Cart Summary</h3>
                        <div className='total-items'>
                            <div className='items'>
                                Total-Items
                            </div>
                            <div className='items-count'>
                                {Qty}
                            </div>
                        </div>
                        <div className='total-price-section'>
                            <div className="just-title">
                                Total Price
                            </div>
                            <div className="item-price">${totalPrice}.00</div>
                        </div>
                        <div className="stripe-section">
                             <StripeCheckout 
                             stripekey ="pk_test_51MjudJSA5EkyKwu1DgYKS8TDfLNYFYvblP3OUhu96ASGqCWiyJSWPbhVZCAtQlHZgY8zXMCVx7W3RrcyqUPyWaZs00QVTgQbsu"
                                tiken={handleToken}
                                billingAddress 
                                shippingAddress
                                amount = {totalPrice * 100}
                                name="Product Details"
                             > 
                             </StripeCheckout>
                        </div>
                    </div>
                </div> : ''}
            </div>
        </>
    )
}

export default Cart