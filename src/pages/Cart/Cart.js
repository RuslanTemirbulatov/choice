import React, { useContext, useEffect, useRef, useState } from 'react';
import "./style.scss";
import AppContext from '../../context';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { useForm } from 'react-hook-form';



const Cart = () => {
    
    
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [open, setOpen] = useState(false)
    const { cartItems, setCartItems, onRemoveItem, cartContent } = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    const { register,
            formState: {errors}, 
            handleSubmit,
            reset } = useForm({
            }); 

    const onSubmit = (data) => {
        setIsOrderComplete(true);
        reset();
    }

    const onClickOrder = () => {
        setIsOrderComplete(true);
        reset();
    }

    const onRemoveCart = () => {
          setIsOrderComplete(false);
          setOpen(false);
        }

    return (
        <div className='drawer'>
            <h1 className='cart-title'>КОРЗИНА</h1>
            <div className='cart-items'>
                {
                    cartItems.length > 0 ?
                    cartItems.map((obj) => (
                        <div key={obj.id} className='cart-item '>
                            <img width={100} height={60} src={obj.image} alt="img" />
                            <div className="cart-item-desc">
                                <h2>{obj.title}</h2>
                                <div className="cart-item-suptitle">
                                    <b className='price'>{obj.price} руб.</b>
                                    <img onClick={() => onRemoveItem(obj.id)} width={25} src="/img/cross.png" alt="cross" />
                                </div>
                            </div>
                        </div>))
                        : 
                        <div className='cart-zero'>
                            <h1>
                                Ваша корзина пуста
                            </h1>
                            <img  width={350} src="./img/empty-cart.gif" alt="empty-cart" />
                            <NavLink className='cart-btn-menu' to='/menu'>Перейти в меню</NavLink>
                        </div>
                }                             
            </div>
            <div className="cart-bottom container">
                            <div className="cart-subtitle">
                                <h2>Итого:</h2>
                                <b>{totalPrice} руб</b>
                            </div>
                                <button onClick={() => setOpen(true)}>ЗАКАЗАТЬ</button>
                            </div>
             <div onClick={() => setOpen(false)} className={open ? 'active overlay' : 'overlay'}>
                <div onClick={e => e.stopPropagation()} className={open ? 'active modal' : 'modal'}>
                    {isOrderComplete ? <div className='form-cart-success' action="">
                        <h1>Ваш заказ на сумму {totalPrice} руб. успешно оформлен</h1>
                        <img width={250} src="/img/success.png" alt="" />
                        <button onClick={onRemoveCart} className='card-btn'>ЗАКРЫТЬ</button>
                    </div>
                    :
                    <form onSubmit={handleSubmit(onSubmit)} className='form-cart' action="">
                        <h2>Введите номер вашего телефона </h2>
                        <IMaskInput mask={'+7(000)-000-00-00'} 
                            unmask={true}
                            name='telNumber'
                            placeholder='+7(___)-___-__-__'
                             />
                        <h2>Введите адрес доставки</h2>
                        <input 
                        {...register('adresLocal', {required: 'Поле обязательно к заполнению'})} 
                        type="text"  placeholder='Введите адрес доставки' />
                        <div style={{height: 10, color: 'red'}}>{errors?.adresLocal && <p>{errors?.adresLocal?.message || 'Error!'}</p>}</div>
                        <h2>Введите номер карты</h2>
                        <input 
                        pattern='(\d{6}[-\s]?\d{12})|(\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4})'
                        {...register('cardNumber', {required: 'Поле обязательно к заполнению'})} 
                        type="text"  maxLength={19} placeholder='2222-2222-2222-2222' />
                        <div style={{height: 10, color: 'red'}}>{errors?.cardNumber && <p>{errors?.cardNumber?.message || 'Error!'}</p>}</div>
                        <h2>Введите код cvv(cvc) и дату выпуска карты</h2>
                        <div className="data-card">
                            <IMaskInput 
                                mask={'000'} 
                                unmask={true}
                                placeholder='000'
                                />
                            <IMaskInput 
                                mask={'00/00'} 
                                unmask={true}
                                placeholder='01/01' />
                        </div>
                        <h2>Итого: {totalPrice} руб.</h2>
                        <button className='card-btn'>ЗАКАЗАТЬ</button>
                    </form>}
                </div>
            </div>
        </div>
    );
};

export default Cart;