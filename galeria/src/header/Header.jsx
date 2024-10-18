// src/header/Header.jsx
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
                    <li><Link to="/natureza">Natureza</Link></li> {/* Link para Natureza */}
                    <li><Link to="/tecnologia">Tecnologia</Link></li> {/* Link para Tecnologia */}
                    <li><Link to="/animais">Animais</Link></li> {/* Link para Animais */}
                    <li><Link to="/roupa">Roupa</Link></li> {/* Link para Roupa */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
