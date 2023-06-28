import React from 'react';
import "./style.scss"

const Contacts = () => {
    return (
        <div>
             <div className="section">
                <div className="container">
                <h1 className="title-1">Контакты</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Адрес</h2>
                        <p>ул. Советская, 102, Стерлитамак, Респ. Башкортостан, 453124</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.3659118414103!2d55.95711687669767!3d53.622613172370706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d811c7e6953c77%3A0x3a6a23bef38e5ea2!2z0JzQuNC80LjQvdC-!5e0!3m2!1sru!2sru!4v1686637973168!5m2!1sru!2sru"
                         width="600"
                          height="450" 
                          allowfullscreen="" 
                          loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                          </iframe>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+7 (999) 999-99-99</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Электронная почта</h2>
                        <p><a href="mailto:choice@gmail.com">choice@gmail.com</a></p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Contacts;