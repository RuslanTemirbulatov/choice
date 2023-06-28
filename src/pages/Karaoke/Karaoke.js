import React, { useContext } from 'react';
import './style.scss'
import AppContext from '../../context';
import { NavLink } from 'react-router-dom';

const Karaoke = () => {
    const { discount, discountNap } = useContext(AppContext);
    console.log(discount);
    return (
        <div>
            <div className='karaoke'>
                <b>АКЦИИ</b>
                <div className='skidki'>
                    <h1 className='title-discount'>Блюда месяца -20%</h1>
                        <div className="discount-items">
                            {discount.map((obj) => (
                                 <div key={obj.title} className="discount-item">
                                 <div className="image"><img className='img' width={350} height={233} src={obj.image} alt="" /></div>
                                 <h2>{obj.title}</h2>
                                 <div className="card-title-2">
                                     <h4>{obj.price} руб.</h4>
                                     <h3>{obj.desc} руб.</h3>
                                     <NavLink className='cart-btn-menu-2' to={'/menu'}>Перейти в меню</NavLink>
                                 </div>
                             </div>
                            )
                            )}
                    </div>
                    <h1 className='title-discount'>Каждую пятницу при заказе от 1000 рублей напиток бесплатно<span>*</span></h1>
                    <div className="dic-nap">
                    {discountNap.map((obj) => (
                                 <div key={obj.title} className="discount-item">
                                 <div className="image"><img className='img' width={350} height={233} src={obj.image} alt="" /></div>
                                 <h2>{obj.title}</h2>
                             </div>
                            )
                            )}
                        </div>
                        <h4 className='steer'><span>*</span> - только при заказе в кафе</h4>

            </div>
            </div>
        </div>
    );
};

export default Karaoke;