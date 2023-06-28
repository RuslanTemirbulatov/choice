import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card';
import NavMenu from './NavMenu/NavMenu';
import Cart from '../Cart/Cart';
import AppContext from '../../context';

const Menu_1 = () => {
    
    const {onAddToCard} = useContext(AppContext);
    const { items } = useContext(AppContext);
    const { searchValue } = useContext(AppContext);
    const { isLoading } = useContext(AppContext);


   
    return (
        <div>
            <NavMenu />
            <div className='menu'>
                <div className="content container">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Холодные и горячие закуски'}</h1>
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

export default Menu_1;


 