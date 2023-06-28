import React from 'react';
import './style.scss';
import vk from "./icons/vk.svg";
import instagram from "./icons/instagram.svg";
import twitter from "./icons/twitter.svg";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><a href="https://vk.com/azazelsa" target='_blank'><img src={vk} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                            <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                        </ul>
                        <div className="copyright">
                            <p>Разработчик - Золотарева Юлия</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;