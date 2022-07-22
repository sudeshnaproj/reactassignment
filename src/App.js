import React ,{useState} from 'react'
import Product from "./pages/Product";
import Cart from "./components/cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./components/product-list/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import CheckoutContact from "./components/checkout/checkout-contactinfo/CheckoutContact";
import CheckoutShipping from './components/checkout/checkout-shipping/CheckoutShipping'
import CheckoutPayment from './components/checkout/checkout-payment/CheckoutPayment'
import Login from "./components/checkout/login/Login";
import ProtectedRoute from './ProtectedRoute';
import CheckoutOrderSummary from './components/checkout/checkout-order-summary/CheckoutOrderSummary';
import FooterEnd from "./components/footer/footer-end/FooterEnd";
import CheckoutOrderSuccess from './components/checkout/checkout-order-successful/CheckoutOrderSuccess';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Navigate to={'/capstone'} />} />
        <Route path="capstone" element={<Home />} />
        <Route path="product" element={<Product />}>
          <Route path="home" element={<Product />} />
          <Route path="women" element={<Product />} />
          <Route path="men" element={<Product />} />
          <Route path="electronics" element={<Product />} />
          <Route path="jewelery" element={<Product />} />
        </Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutContact loggedIn={loggedIn} />} />
        
        <Route path="checkoutShipping" 
        element={
            <ProtectedRoute loggedIn={loggedIn}>
              <CheckoutShipping/>
            </ProtectedRoute>
        }
        />
        <Route path="checkoutPayment" 
        element={
          <ProtectedRoute loggedIn={loggedIn}>
            <CheckoutPayment/>
          </ProtectedRoute>
      } />
      <Route path="orderSummary" 
        element={
          <ProtectedRoute loggedIn={loggedIn}>
            <CheckoutOrderSummary/>
          </ProtectedRoute>
      } />
       <Route path="orderSuccess" 
        element={
          <ProtectedRoute loggedIn={loggedIn}>
            <CheckoutOrderSuccess/>
          </ProtectedRoute>
      } />
        <Route path="login" element= {<Login setLoggedIn={setLoggedIn}/>} /> 
      </Routes>
      <FooterEnd />
    </div>
  );
}

export default App;
