import React, { useEffect, useState, useContext } from 'react';

import NavMenu from './NavMenu/NavMenu';
import Card from '../../components/Card';
import axios from 'axios';
import AppContext from '../../context';


const Menu_2 = () => {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const {searchValue, setSearchValue } = useContext(AppContext);

    
    useEffect(() => {
        axios.get('https://6469b3e9183682d61444d2eb.mockapi.io/soups').then(res => {
            setItems(res.data);
        })
    }, [])

    const {onAddToCard} = useContext(AppContext);
    return (
        <div>
            <NavMenu />
            <div className='menu'>
                <div className="content container">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Первые блюда'}</h1>
                    <div className="cards">
                    {items
                        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => (
                            <Card 
                                key={item.title}
                                title={item.title}
                                desc={item.desc}
                                image={item.image}
                                price={item.price}
                                onClick={(obj) => onAddToCard(obj)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu_2;