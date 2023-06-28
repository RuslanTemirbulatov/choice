import React, { useContext, useState } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import AppContext from '../../context';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useForm } from 'react-hook-form';


const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [nav, setNav] = useState(false);
    const activeLink = "nav-item nav-item--active";
    const normalLink = "nav-item";
    const activMenu = "active";
    const normalMenu = "nav";
    const { cartItems } = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    const { register,
        formState: {errors}, 
        handleSubmit,
        reset } = useForm({
        }); 


    // const onClickOrder = () => {
    //     setIsOrderComplete(true)
    // }

    const onSubmit = (data) => {
        setIsOrderComplete(true);
        reset();
    }

    const removeOrder = () => {
        setIsOrderComplete(false);
        setOpen(false);

    }

    return (
        <div>
        <header className="header" >
        <div className="container">
            <div className="header-line">
            <div className="header-logo">
                <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to='/'>
                    <div className='logo-name'>
                        <h2>Кафе Чойс</h2>
                    </div>
                </NavLink>
            </div>
            <div className={nav ? [activMenu, normalMenu].join(' ') : [normalMenu]}>
                <NavLink onClick={() => setNav(false)} className={({isActive}) => isActive ? activeLink : normalLink} to='/'>ГЛАВНАЯ</NavLink>
                <NavLink onClick={() => setNav(false)} className={({isActive}) => isActive ? activeLink : normalLink} to='/menu'>МЕНЮ</NavLink>
                <NavLink onClick={() => setNav(false)} className={({isActive}) => isActive ? activeLink : normalLink} to='/akcii'>АКЦИИ</NavLink>
                <NavLink onClick={() => setNav(false)} className={({isActive}) => isActive ? activeLink : normalLink} to='/contacts'>КОНТАКТЫ</NavLink>
            </div>
            <div className="cart">
            <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to='/cart'>
                <img  width={25} className="cart-img" src="/img/cart.svg" alt="cart" />
                <h1>{totalPrice} руб.</h1>
            </NavLink>
            </div>
            <div className="phone">
                <div className="phone-holder">
                    <div className="phone-img"><img src="/img/phone.png" alt="phone" /></div>
                    <div className="phone-number"><a href="#" className="num">+7 999-999-99-99</a></div>
                </div>
                <div className="phone-text">Свяжитесь с нами для <br />
                    бронирования</div>
            </div>
            <div className="button"><button onClick={() => setOpen(true)}>ЗАКАЗ СТОЛИКА</button></div>
            </div>
        </div>
        <div onClick={() => setNav(!nav)} className='mobile_btn'>
            {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
    </header>
     <div onClick={() => setOpen(false)} className={open ? 'active overlay' : 'overlay'}>
     <div onClick={e => e.stopPropagation()} className={open ? 'active modal-2' : 'modal-2'}>
         {isOrderComplete ? <div className='form-cart-success-2' action="">
            <h1>Ваш стол успешно забронирован</h1>
            <img width={250} src="/img/success.png" alt="" />
            <button onClick={removeOrder} className='card-btn'>ЗАКРЫТЬ</button>
        </div> 
        : 
         <form onSubmit={handleSubmit(onSubmit)}  className='form-cart' action="">
             <h2>Введите ФИО </h2>
             <input 
             type="text" 
             name="userName" 
             placeholder='Введите ФИО' id=""
             {...register('userName', {required: 'Поле обязательно к заполнению'})}  />
            <div style={{height: 10, color: 'red'}}>{errors?.userName && <p>{errors?.userName?.message || 'Error!'}</p>}</div>
             <h2>Введите дату</h2>
             <input type="date" min="2023-05-25" max="2024-01-01" required name="" placeholder='Введите дату' id="" />
             <h2>Введите время</h2>
             <input type="time" min="10:00" max="23:00" required name="" placeholder='Введите дату' id="" />
             <button  className='card-btn'>ЗАКАЗАТЬ</button>
         </form>
         }
     </div>
    </div>
    </div>
    );
};

export default Navbar;