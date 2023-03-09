import React, { useContext } from 'react'
import { ProductContext } from '../Global/ProductContext'
import { CartContext } from "../Global/CartContext"
import Banner from './Banner';

const Products = () => {
    // const data = useContext(ProductContext);
    // console.log(data);
    const { products } = useContext(ProductContext);
    // const data = useContext(CartContext);
    // console.log(data);
    const {dispatch} = useContext(CartContext);

    return (
        <>
            <div className='container'>
                <Banner />
                <div className='products'>
                    {products.map((product) => {
                        const { id, name, price, image, status } = product;
                        return (
                            <>
                                <div className='product' key={id}>
                                    <div className='product-image'>
                                        <img src={image} alt="productImge" />
                                    </div>
                                    <div className='productdetails'>
                                        <div className='product-name'>
                                            {name}
                                        </div>
                                        <div className='product-price'>
                                            ${price}.00
                                        </div>
                                    </div>
                                    <div className="add-to-cart" onClick={()=>dispatch({type:'ADD_TO_CART',id:id,product})}> Add To Cart</div>
                                    {status === 'hot' ? <div className='hot'>Hot</div> : ''}
                                    {status === 'new' ? <div className='new'>New</div> : ''}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products