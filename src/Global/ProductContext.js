import React, { createContext, useState } from "react";
import dslr from "../assets/dslr.jpg"
import headphones from "../assets/headphones.jpg"
import iphone from "../assets/iphone.jpg"
import microphone from "../assets/microphone.jpg"
import perfume from "../assets/perfume.jpg"
import rings from "../assets/rings.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products] = useState([
        { id: 1, name: "Dslr", price: 300, image: dslr, status: 'hot' },
        { id: 2, name: "Headphones", price: 100, image: headphones, status: 'new' },
        { id: 3, name: "I-Phone-12 Mini", price: 600, image: iphone, status: 'new' },
        { id: 4, name: "BlueYatti", price: 50, image: microphone, status: 'new' },
        { id: 5, name: "Balck Perfume", price: 15, image: perfume, status: 'new' },
        { id: 6, name: "Ring Golden", price: 80, image: rings, status: 'hot' },
        { id: 7, name: "Jorden Shoes", price: 150, image: shoes, status: 'new' },
        { id: 8, name: "fastract Watch", price: 400, image: watch, status: 'new' },
        { id: 9, name: "Dslr", price: 300, image: dslr, status: 'hot' },
        { id: 10, name: "Headphones", price: 100, image: headphones, status: 'new' },
        { id: 11, name: "I-Phone-12 Mini", price: 600, image: iphone, status: 'new' },
        { id: 12, name: "BlueYatti", price: 50, image: microphone, status: 'new' },
        { id: 13, name: "Balck Perfume", price: 15, image: perfume, status: 'new' },
        { id: 14, name: "Ring Golden", price: 80, image: rings, status: 'hot' },
        { id: 15, name: "Jorden Shoes", price: 150, image: shoes, status: 'new' },
        { id: 16, name: "fastract Watch", price: 400, image: watch, status: 'new' },

    ])
    return (
        <ProductContext.Provider value={{ products: [...products] }} >
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider