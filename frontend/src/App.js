import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import ProductForm from './pages/ProductForm';
import ProductFullPage from './pages/ProductFullPage';
import './App.css';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
//vidhan's footprint!

function App() {
  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  return (
    <div className='overflow-x-hidden'>
      <div className="shadow-xl bg-slate-200">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/productform" element={<ProductForm/>}/>
        <Route path="/product-details/:id" element={<ProductFullPage/>}/>

        <Route path="/profile" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard/>
              </PrivateRoute>
            }/>;
      </Routes>  

      <div className="bg-slate-700">
        <Footer/>
      </div> 
    </div>
  );
}

export default App;
