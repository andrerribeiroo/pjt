// src/animais/Animais.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Animais.css';

const Animais = () => {
  const navigate = useNavigate();

  // Lista de imagens do tema Animais
  const animaisImages = [
    { id: 19, src: '/Animais.png', alt: 'Leão' },
    { id: 20, src: '/Animais2.png', alt: 'Tigre' },
    { id: 21, src: '/Animais3.png', alt: 'Elefante' },
    { id: 22, src: '/Animais4.png', alt: 'Girafa' },
    { id: 23, src: '/Animais5.png', alt: 'Zebra' },
    { id: 24, src: '/Animais6.png', alt: 'Urso' },
    { id: 25, src: '/Animais7.png', alt: 'Macaco' },
    { id: 26, src: '/Animais8.png', alt: 'Panda' },
    { id: 27, src: '/Animais9.png', alt: 'Raposa' },
  ];

  // Manipula o clique na imagem
  const handleImageClick = (id) => {
    navigate(`/image/${id}`); // Redireciona para a página de detalhes
  };

  return (
    <div>
      <h2>Galeria de Animais</h2>
      <div className="gallery">
        {animaisImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image.id)} // Redireciona para os detalhes da imagem
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animais;
