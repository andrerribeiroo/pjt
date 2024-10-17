// src/ImageDetail.jsx
import React from 'react';
import './imageDetail.css';
import { useParams } from 'react-router-dom';

const ImageDetail = () => {
  const { id } = useParams();

  return (
    <div className='detail'>
      <h2>Detalhes da Imagem {id}</h2>
      <img src={`/natural.png`} alt={`Imagem ${id}`} />
      <p>Aqui você pode adicionar mais informações sobre a imagem {id}.</p>
    </div>
  );
};

export default ImageDetail;
