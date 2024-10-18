// src/home/HomeMisturado.jsx
import React, { useState } from 'react';
import './HomeMisturado.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



<nav>
  <Link to="/">Home</Link>
  <Link to="/home-misturado">Galeria Misturada</Link>
  {/* Outros links */}
</nav>

const HomeMisturado = () => {
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

  // Lista de imagens do tema Animais
  const animaisImages = [
    { id: 19, src: '/Animais.png', alt: 'Animal 1' },
    { id: 20, src: '/Animais.png', alt: 'Animal 2' },
    { id: 21, src: '/Animais.png', alt: 'Animal 3' },
    { id: 22, src: '/Animais.png', alt: 'Animal 4' },
    { id: 23, src: '/Animais.png', alt: 'Animal 5' },
    { id: 24, src: '/Animais.png', alt: 'Animal 6' },
    { id: 25, src: '/Animais.png', alt: 'Animal 7' },
    { id: 26, src: '/Animais.png', alt: 'Animal 8' },
    { id: 27, src: '/Animais.png', alt: 'Animal 9' },
  ];

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

  // Combina todas as imagens (Natureza, Tecnologia, Animais e Roupa)
  const allImages = [
    ...naturezaImages,
    ...tecnologiaImages,
    ...animaisImages,
    ...roupaImages,
  ];

  // Embaralha as imagens
  const shuffleImages = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  };

  const shuffledImages = shuffleImages([...allImages]); // Embaralha as imagens

  // Estado para controle de paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calcula o índice de início e fim das imagens da página atual
  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = shuffledImages.slice(indexOfFirstImage, indexOfLastImage); // Imagens da página atual

  // Manipula o clique na imagem
  const handleImageClick = (id) => {
    navigate(`/image/${id}`); // Redireciona para a página de detalhes
  };

  // Manipula navegação para a próxima página
  const handleNextPage = () => {
    if (currentPage < Math.ceil(shuffledImages.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Manipula navegação para a página anterior
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    
    <div>
      <h2>Galeria de Imagens Misturadas</h2>
      {/* Galeria de Imagens */}
      <div className="gallery">
        {currentImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image.id)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* Botões de paginação */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Página Anterior
        </button>
        <span>{`Página ${currentPage} de ${Math.ceil(shuffledImages.length / itemsPerPage)}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(shuffledImages.length / itemsPerPage)}>
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default HomeMisturado;
