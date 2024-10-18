// src/natureza/Natureza.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Natureza.css';

const Natureza = () => {
  const navigate = useNavigate();

  // Lista de imagens do tema Natureza
  const naturezaImages = [
    { id: 1, src: '/natural.png', alt: 'Natureza 1' },
    { id: 2, src: '/natural.png', alt: 'Natureza 2' },
    { id: 3, src: '/natural.png', alt: 'Natureza 3' },
    { id: 4, src: '/natural.png', alt: 'Natureza 4' },
    { id: 5, src: '/natural.png', alt: 'Natureza 5' },
    { id: 6, src: '/natural.png', alt: 'Natureza 6' },
    { id: 7, src: '/natural.png', alt: 'Natureza 7' },
    { id: 8, src: '/natural.png', alt: 'Natureza 8' },
    { id: 9, src: '/natural.png', alt: 'Natureza 9' },
  ];

  // Manipula o clique na imagem
  const handleImageClick = (id) => {
    navigate(`/image/${id}`); // Redireciona para a página de detalhes
  };

  return (
    <div>
      <h2>Galeria de Natureza</h2>
      <div className="gallery">
        {naturezaImages.map((image) => (
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

export default Natureza;
