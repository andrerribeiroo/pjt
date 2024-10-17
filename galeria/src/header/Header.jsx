import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
        <a href=""><img className='logo' src="gbmedina.png" alt="" /></a>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Natureza</a></li>
                <li><a href="#">Tecnologia</a></li>
                <li><a href="#">Animais</a></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;