import React,{useContext} from 'react'
import { CartContext } from "../Global/CartContext"

const Cart = () => {
    const data = useContext(CartContext);
    console.log(data);
    return (
        <>
            <div className='container'>
                <div className='cart-container' style={{marginTop:"100px"}}>
                    <h1>Shopping Cart</h1>
                </div>
            </div>
        </>
    )
}

export default Cart