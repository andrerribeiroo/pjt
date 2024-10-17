import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  // Lista de imagens
  const images = [
    { id: 1, src: '/natural.png', alt: 'Imagem 1' },
    { id: 2, src: '/natural.png', alt: 'Imagem 2' },
    { id: 3, src: '/natural.png', alt: 'Imagem 3' },
    { id: 4, src: '/natural.png', alt: 'Imagem 4' },
    { id: 5, src: '/natural.png', alt: 'Imagem 5' },
    { id: 6, src: '/natural.png', alt: 'Imagem 6' },
    { id: 7, src: '/natural.png', alt: 'Imagem 7' },
    { id: 8, src: '/natural.png', alt: 'Imagem 8' },
    { id: 9, src: '/natural.png', alt: 'Imagem 9' },
    { id: 10, src: '/natural.png', alt: 'Imagem 10' },
    { id: 11, src: '/natural.png', alt: 'Imagem 11' },
    { id: 12, src: '/natural.png', alt: 'Imagem 12' },
    { id: 13, src: '/natural.png', alt: 'Imagem 13' },
    { id: 14, src: '/natural.png', alt: 'Imagem 14' },
    { id: 15, src: '/natural.png', alt: 'Imagem 15' },
    { id: 16, src: '/natural.png', alt: 'Imagem 16' },
    { id: 17, src: '/natural.png', alt: 'Imagem 17' },
    { id: 18, src: '/natural.png', alt: 'Imagem 18' },
  ];

  // Estado para controle de paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 9 imagens por página (3x3 grid)

  // Calcula o índice de início e fim das imagens da página atual
  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage); // Imagens da página atual

  // Manipula o clique na imagem
  const handleImageClick = (id) => {
    navigate(`/image/${id}`); // Redireciona para a página de detalhes
  };

  // Manipula navegação para a próxima página
  const handleNextPage = () => {
    if (currentPage < Math.ceil(images.length / itemsPerPage)) {
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

      {/* Botões de navegação */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Página Anterior
        </button>
        <span>{`Página ${currentPage} de ${Math.ceil(images.length / itemsPerPage)}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(images.length / itemsPerPage)}>
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default Home;
