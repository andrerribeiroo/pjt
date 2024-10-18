// src/roupa/Roupa.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Roupa.css';

const Roupa = () => {
  const navigate = useNavigate();

  // Lista de imagens do tema Roupa
  const roupaImages = [
    { id: 28, src: '/thugnine.png', alt: 'Roupa 1' },
    { id: 29, src: '/thugnine.png', alt: 'Roupa 2' },
    { id: 30, src: '/thugnine.png', alt: 'Roupa 3' },
    { id: 31, src: '/thugnine.png', alt: 'Roupa 4' },
    { id: 32, src: '/thugnine.png', alt: 'Roupa 5' },
    { id: 33, src: '/thugnine.png', alt: 'Roupa 6' },
    { id: 34, src: '/thugnine.png', alt: 'Roupa 7' },
    { id: 35, src: '/thugnine.png', alt: 'Roupa 8' },
    { id: 36, src: '/thugnine.png', alt: 'Roupa 9' },
  ];

  // Manipula o clique na imagem
  const handleImageClick = (id) => {
    navigate(`/image/${id}`); // Redireciona para a página de detalhes
  };

  return (
    <div>
      <h2>Galeria de Roupas</h2>
      <div className="gallery">
        {roupaImages.map((image) => (
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

export default Roupa;
