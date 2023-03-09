import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';
import '../App.css';

const Navbar = () => {
  const {Qty} =  useContext(CartContext)
  return (
    <>
      <div>
        <nav>
          <ul className='left'>
            <li><Link to="/">Rahul-Shop</Link></li>
          </ul>
          <ul className='right'>
            <li><Link to="cart"><span className='shopping-cart'><i className="fa-solid fa-cart-plus"></i><span className='cartCount'>{Qty}</span></span></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar