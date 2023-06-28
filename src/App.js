import './App.scss';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';
import Karaoke from './pages/Karaoke/Karaoke';
import Menu from './pages/Menu/Menu';
import Menu_1 from './pages/Menu/Menu_1';
import Menu_2 from './pages/Menu/Menu_2';
import Menu_3 from './pages/Menu/Menu_3';
import Menu_4 from './pages/Menu/Menu_4';
import Menu_5 from './pages/Menu/Menu_5';
import Cart from './pages/Cart/Cart';
import AppContext from './context';
import axios from 'axios';


function App() {
  
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [discount, setDiscount] = useState([]);
  const [discountNap, setDiscountNap] = useState([]);
  
  
  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://646b1b297d3c1cae4ce33261.mockapi.io/cart');
      const itemsResponse = await axios.get('https://6469b3e9183682d61444d2eb.mockapi.io/items');
      const itemDiscount = await axios.get('https://646f59a409ff19b120871300.mockapi.io/discount');
      const itemDiscountNap = await axios.get('https://646f59a409ff19b120871300.mockapi.io/disc-nap');

      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
      setDiscount(itemDiscount.data);
      setDiscountNap(itemDiscountNap.data);
    }
    
    fetchData();
  }, [])
  const onAddToCard = async (obj) => {
    const {data} = await axios.post('https://646b1b297d3c1cae4ce33261.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, data]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://646b1b297d3c1cae4ce33261.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
    console.log(event.target.value)
  }


  return (
    <div className="App">
      <AppContext.Provider value={{cartItems, 
        setCartItems,
        onRemoveItem, 
        items, 
        onAddToCard, 
        onChangeSearchInput, 
        searchValue,
        setSearchValue,
        isLoading, 
        discount,
        discountNap}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='akcii' element={<Karaoke />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='zakuski' element={<Menu_1 />} />
            <Route path='soup' element={<Menu_2 />} />
            <Route path='goryachee' element={<Menu_3 />} />
            <Route path='vypechka' element={<Menu_4 />} />
            <Route path='napitki' element={<Menu_5 />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
          <Footer />
        </Router>

      </AppContext.Provider>
    </div>
  );
}

export default App;


