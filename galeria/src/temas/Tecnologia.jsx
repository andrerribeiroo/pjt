// src/tecnologia/Tecnologia.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tecnologia.css';

const Tecnologia = () => {
  const navigate = useNavigate();

  // Lista de imagens do tema Tecnologia
  const tecnologiaImages = [
    { id: 10, src: '/tecnologia.png', alt: 'Tecnologia 1' },
    { id: 11, src: '/tecnologia.png', alt: 'Tecnologia 2' },
    { id: 12, src: '/tecnologia.png', alt: 'Tecnologia 3' },
    { id: 13, src: '/tecnologia.png', alt: 'Tecnologia 4' },
    { id: 14, src: '/tecnologia.png', alt: 'Tecnologia 5' },
    { id: 15, src: '/tecnologia.png', alt: 'Tecnologia 6' },
    { id: 16, src: '/tecnologia.png', alt: 'Tecnologia 7' },
    { id: 17, src: '/tecnologia.png', alt: 'Tecnologia 8' },
    { id: 18, src: '/tecnologia.png', alt: 'Tecnologia 9' },
  ];

  // Manipula o clique na imagem
  const handleImageClick = (id) => {
    navigate(`/image/${id}`); // Redireciona para a página de detalhes
  };

  return (
    <div>
      <h2>Galeria de Tecnologia</h2>
      <div className="gallery">
        {tecnologiaImages.map((image) => (
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

export default Tecnologia;
