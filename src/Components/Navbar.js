import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <ul className='left'>
            <li><Link to="/">Rahul-Shop</Link></li>
          </ul>
          <ul className='right'>
            <li><Link to="cart"><span className='shopping-cart'><i className="fa-solid fa-cart-plus"></i><span className='cartCount'>0</span></span></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar