// src/home/Home.jsx
import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Lista de imagens do tema Natureza
  const naturezaImages = [
    { id: 1, src: '/natural.png', alt: 'Natureza 1' },
    { id: 2, src: '/natural2.png', alt: 'Natureza 2' },
    { id: 3, src: '/natural3.png', alt: 'Natureza 3' },
    { id: 4, src: '/natural4.png', alt: 'Natureza 4' },
    { id: 5, src: '/natural5.png', alt: 'Natureza 5' },
    { id: 6, src: '/natural6.png', alt: 'Natureza 6' },
    { id: 7, src: '/natural7.png', alt: 'Natureza 7' },
    { id: 8, src: '/natural8.png', alt: 'Natureza 8' },
    { id: 9, src: '/natural9.png', alt: 'Natureza 9' },
  ];

  // Lista de imagens do tema Tecnologia
  const tecnologiaImages = [
    { id: 10, src: '/tecnologia.png', alt: 'Tecnologia 1' },
    { id: 11, src: '/tecnologia2.png', alt: 'Tecnologia 2' },
    { id: 12, src: '/tecnologia3.png', alt: 'Tecnologia 3' },
    { id: 13, src: '/tecnologia4.png', alt: 'Tecnologia 4' },
    { id: 14, src: '/tecnologia5.png', alt: 'Tecnologia 5' },
    { id: 15, src: '/tecnologia6.png', alt: 'Tecnologia 6' },
    { id: 16, src: '/tecnologia7.png', alt: 'Tecnologia 7' },
    { id: 17, src: '/tecnologia8.png', alt: 'Tecnologia 8' },
    { id: 18, src: '/tecnologia9.png', alt: 'Tecnologia 9' },
  ];

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

  // Lista de imagens do tema Roupa
  const roupaImages = [
    { id: 28, src: '/thugnine.png', alt: 'Roupa 1' },
    { id: 29, src: '/thugnine2.png', alt: 'Roupa 2' },
    { id: 30, src: '/thugnine3.png', alt: 'Roupa 3' },
    { id: 31, src: '/thugnine4.png', alt: 'Roupa 4' },
    { id: 32, src: '/thugnine5.png', alt: 'Roupa 5' },
    { id: 33, src: '/thugnine6.png', alt: 'Roupa 6' },
    { id: 34, src: '/thugnine7.png', alt: 'Roupa 7' },
    { id: 35, src: '/thugnine8.png', alt: 'Roupa 8' },
    { id: 36, src: '/thugnine9.png', alt: 'Roupa 9' },
  ];

  // Nova lista de 9 imagens
  const novasImages = [
    { id: 37, src: '4060.png', alt: 'Nova Imagem 1' },
    { id: 38, src: '40602.png', alt: 'Nova Imagem 2' },
    { id: 39, src: '40603.png', alt: 'Nova Imagem 3' },
    { id: 40, src: '40604.png', alt: 'Nova Imagem 4' },
    { id: 41, src: '40605.png', alt: 'Nova Imagem 5' },
    { id: 42, src: '40606.png', alt: 'Nova Imagem 6' },
    { id: 43, src: '40607.png', alt: 'Nova Imagem 7' },
    { id: 44, src: '40608.png', alt: 'Nova Imagem 8' },
    { id: 45, src: '40609.png', alt: 'Nova Imagem 9' },
  ];

  // Estado para controle de paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Combina todas as imagens (Natureza, Tecnologia, Animais, Roupa e Novas)
  const allImages = [...naturezaImages, ...tecnologiaImages, ...animaisImages, ...roupaImages, ...novasImages];

  // Calcula o índice de início e fim das imagens da página atual
  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = allImages.slice(indexOfFirstImage, indexOfLastImage); // Imagens da página atual

  // Manipula o clique na imagem
  const handleImageClick = (id) => {
    navigate(`/image/${id}`); // Redireciona para a página de detalhes
  };

  // Manipula navegação para a próxima página
  const handleNextPage = () => {
    if (currentPage < Math.ceil(allImages.length / itemsPerPage)) {
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
      <h2>Galeria de Imagens</h2>
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
        <span>{`Página ${currentPage} de ${Math.ceil(allImages.length / itemsPerPage)}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(allImages.length / itemsPerPage)}>
          Próxima Página
        </button>
      </div>
    </div>
  );
};

export default Home;
