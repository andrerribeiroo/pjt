import React from 'react';
import './Footer.css'; // Importando o arquivo CSS

const Footer = () => {
    return (
        <footer>
            <h1 id="contato-h1">Contato</h1>
            <div className="contatos">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
            </div>
            <p className="footer-p">&copy; 2023 Meu Site. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;

