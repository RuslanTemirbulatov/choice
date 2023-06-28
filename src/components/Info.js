import React from 'react';

const Info = () => {
    return (
        <div>
             <div className='form-cart' action="">
                <h2>Введите номер вашего телефона </h2>
                <input type="text" name="" placeholder='Введите номер телефона' id="" />
                <h2>Введите адрес доставки</h2>
                <input type="text" name="" placeholder='Введите адрес доставки' id="" />
                <h2>Итого: руб.</h2>
                <button className='card-btn'>ЗАКАЗАТЬ</button>
            </div>
        </div>
    );
};

export default Info;