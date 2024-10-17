import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/"><img className='logo' src="gbmedina.png" alt="Logo" /></Link> {/* Link para Home */}
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li> {/* Link para Home */}
                    <li><Link to="/natureza">Natureza</Link></li> {/* Suponha que vai existir essa rota */}
                    <li><Link to="/tecnologia">Tecnologia</Link></li> {/* Suponha que vai existir essa rota */}
                    <li><Link to="/animais">Animais</Link></li> {/* Suponha que vai existir essa rota */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;


