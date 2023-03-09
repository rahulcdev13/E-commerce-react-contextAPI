import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductContextProvider from './Global/ProductContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from './Components/PageNotFound';
import Cart from './Components/Cart';
import CartContextProvider from './Global/CartContext'

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
        <Router>
          <Navbar /> 
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Router> 
        </CartContextProvider>
      </ProductContextProvider> 
    </>
  );
}

export default App;
