import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import AppContext from '../../../context';
import {AiOutlineShop, AiOutlineClose} from 'react-icons/ai';


const NavMenu = () => {

    const activeLink = "nav-menu-link nav-menu-link--active";
    const normalLink = "nav-menu-link";
    const [nav, setNav] = useState(false);

    const { onChangeSearchInput } = useContext(AppContext);
    const {searchValue, setSearchValue } = useContext(AppContext);
    const activMenu = "active-menu";
    const normalMenu = "menu-mob nav-menu-link";

    
    return (
        <div>
            <div>
                <div className="nav_menu">
                    <div onClick={() => setNav(false)} className={nav ? 'active overlay' : 'overlay'}>
                        <ul className={nav ? [activMenu, normalMenu].join(' ') : [normalMenu]}>
                            <li>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to='/zakuski'>Холодные закуски</NavLink>
                                </li>
                            <li>
                                <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to='/soup'>Первые блюда</NavLink>
                                </li>
                            <li>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to='/goryachee'>Вторые блюда</NavLink>
                                </li>
                            <li>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to='/vypechka'>Выпечка</NavLink>
                                </li>
                            <li>
                            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to='/napitki'>Карта бара</NavLink>
                                </li>
                        </ul>
                    </div>
                    
                    <div onClick={() => setNav(!nav)} className="menu_mobile">
                        {nav ? '' : 'Меню'}
                    </div>
                    <div className='search'>
                        <div className="search-block">
                            <img src='/img/search.svg' alt='serach' />
                            {searchValue ? <img onClick={() => setSearchValue('')} className='clear' width={25} src="/img/cross.png" alt="cross" /> : ''}
                            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder='Поиск...' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;