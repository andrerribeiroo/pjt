// src/hardware/Hardware.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hardware.css'; // Certifique-se de criar um arquivo CSS correspondente, se necessário.

const Hardware = () => {
  const navigate = useNavigate();

  // Lista de imagens do tema Hardware
  const hardwareImages = [
    { id: 37, src: '/4060.png', alt: '4060 1' },
    { id: 38, src: '/40602.png', alt: '4060 2' },
    { id: 39, src: '/40603.png', alt: '4060 3' },
    { id: 40, src: '/40604.png', alt: '4060 4' },
    { id: 41, src: '/40605.png', alt: '4060 5' },
    { id: 42, src: '/40606.png', alt: '4060 6' },
    { id: 43, src: '/40607.png', alt: '4060 7' },
    { id: 44, src: '/40608.png', alt: '4060 8' },
    { id: 45, src: '/40609.png', alt: '4060 9' },
  ];

  // Manipula o clique na imagem
  const handleImageClick = (id) => {
    navigate(`/image/${id}`); // Redireciona para a página de detalhes
  };

  return (
    <div>
      <h2>Galeria de Hardware</h2>
      <div className="gallery">
        {hardwareImages.map((image) => (
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

export default Hardware;
