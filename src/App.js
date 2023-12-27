import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
// import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Register from './Components/Register.jsx/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes >
        <Route path="/" element={<Shop/>}/>
        {/* <Route path="/login" element={<LoginSignup/>}/> */}
        {/* <Route path="/register" element={<LoginSignup/>}/> */}
        <Route path="/men" element={<ShopCategory banner={men_banner}  category="men" />}/>
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>} />
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
