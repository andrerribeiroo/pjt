// src/ImageDetail.jsx
import React from 'react';
import './imageDetail.css';
import { useParams } from 'react-router-dom';

const ImageDetail = () => {
  const { id } = useParams();

  // Dados das imagens com informações adicionais
  const imageDetails = {
    1: { src: '/natural.png', alt: 'Natureza 1', description: 'Descrição da imagem de Natureza 1.' },
    2: { src: '/natural.png', alt: 'Natureza 2', description: 'Descrição da imagem de Natureza 2.' },
    3: { src: '/natural.png', alt: 'Natureza 3', description: 'Descrição da imagem de Natureza 3.' },
    4: { src: '/natural.png', alt: 'Natureza 4', description: 'Descrição da imagem de Natureza 4.' },
    5: { src: '/natural.png', alt: 'Natureza 5', description: 'Descrição da imagem de Natureza 5.' },
    6: { src: '/natural.png', alt: 'Natureza 6', description: 'Descrição da imagem de Natureza 6.' },
    7: { src: '/natural.png', alt: 'Natureza 7', description: 'Descrição da imagem de Natureza 7.' },
    8: { src: '/natural.png', alt: 'Natureza 8', description: 'Descrição da imagem de Natureza 8.' },
    9: { src: '/natural.png', alt: 'Natureza 9', description: 'Descrição da imagem de Natureza 9.' },
    10: { src: '/tecnologia.png', alt: 'Tecnologia 1', description: 'Descrição da imagem de Tecnologia 1.' },
    11: { src: '/tecnologia.png', alt: 'Tecnologia 2', description: 'Descrição da imagem de Tecnologia 2.' },
    12: { src: '/tecnologia.png', alt: 'Tecnologia 3', description: 'Descrição da imagem de Tecnologia 3.' },
    13: { src: '/tecnologia.png', alt: 'Tecnologia 4', description: 'Descrição da imagem de Tecnologia 4.' },
    14: { src: '/tecnologia.png', alt: 'Tecnologia 5', description: 'Descrição da imagem de Tecnologia 5.' },
    15: { src: '/tecnologia.png', alt: 'Tecnologia 6', description: 'Descrição da imagem de Tecnologia 6.' },
    16: { src: '/tecnologia.png', alt: 'Tecnologia 7', description: 'Descrição da imagem de Tecnologia 7.' },
    17: { src: '/tecnologia.png', alt: 'Tecnologia 8', description: 'Descrição da imagem de Tecnologia 8.' },
    18: { src: '/tecnologia.png', alt: 'Tecnologia 9', description: 'Descrição da imagem de Tecnologia 9.' },
    // Todas as imagens de animais têm o mesmo src
    19: { src: '/Animais.png', alt: 'Leão', description: 'Descrição da imagem de um leão.' },
    20: { src: '/Animais.png', alt: 'Tigre', description: 'Descrição da imagem de um tigre.' },
    21: { src: '/Animais.png', alt: 'Elefante', description: 'Descrição da imagem de um elefante.' },
    22: { src: '/Animais.png', alt: 'Girafa', description: 'Descrição da imagem de uma girafa.' },
    23: { src: '/Animais.png', alt: 'Zebra', description: 'Descrição da imagem de uma zebra.' },
    24: { src: '/Animais.png', alt: 'Urso', description: 'Descrição da imagem de um urso.' },
    25: { src: '/Animais.png', alt: 'Macaco', description: 'Descrição da imagem de um macaco.' },
    26: { src: '/Animais.png', alt: 'Panda', description: 'Descrição da imagem de um panda.' },
    27: { src: '/Animais.png', alt: 'Raposa', description: 'Descrição da imagem de uma raposa.' },
    28: { src: '/Animais.png', alt: 'Cachorro', description: 'Descrição da imagem de um cachorro.' },
  };

  // Obtém os detalhes da imagem com base no id
  const image = imageDetails[id];

  return (
    <div className='detail'>
      {image ? (
        <>
          <h2>Detalhes da Imagem {image.alt}</h2>
          <img src={image.src} alt={image.alt} />
          <p>{image.description}</p>
        </>
      ) : (
        <p>Imagem não encontrada.</p>
      )}
    </div>
  );
};

export default ImageDetail;
