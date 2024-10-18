// src/image/ImageDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ImageDetail.css';

// Lista de detalhes das imagens
const imageDetails = {
    1: { title: "Natureza 1", description: "Descrição da imagem Natureza 1", src: "/natural.png" },
    2: { title: "Natureza 2", description: "Descrição da imagem Natureza 2", src: "/natural.png" },
    3: { title: "Natureza 3", description: "Descrição da imagem Natureza 3", src: "/natural.png" },
    4: { title: "Natureza 4", description: "Descrição da imagem Natureza 4", src: "/natural.png" },
    5: { title: "Natureza 5", description: "Descrição da imagem Natureza 5", src: "/natural.png" },
    6: { title: "Natureza 6", description: "Descrição da imagem Natureza 6", src: "/natural.png" },
    7: { title: "Natureza 7", description: "Descrição da imagem Natureza 7", src: "/natural.png" },
    8: { title: "Natureza 8", description: "Descrição da imagem Natureza 8", src: "/natural.png" },
    9: { title: "Natureza 9", description: "Descrição da imagem Natureza 9", src: "/natural.png" },
    10: { title: "Tecnologia 1", description: "Descrição da imagem Tecnologia 1", src: "/tecnologia.png" },
    11: { title: "Tecnologia 2", description: "Descrição da imagem Tecnologia 2", src: "/tecnologia.png" },
    12: { title: "Tecnologia 3", description: "Descrição da imagem Tecnologia 3", src: "/tecnologia.png" },
    13: { title: "Tecnologia 4", description: "Descrição da imagem Tecnologia 4", src: "/tecnologia.png" },
    14: { title: "Tecnologia 5", description: "Descrição da imagem Tecnologia 5", src: "/tecnologia.png" },
    15: { title: "Tecnologia 6", description: "Descrição da imagem Tecnologia 6", src: "/tecnologia.png" },
    16: { title: "Tecnologia 7", description: "Descrição da imagem Tecnologia 7", src: "/tecnologia.png" },
    17: { title: "Tecnologia 8", description: "Descrição da imagem Tecnologia 8", src: "/tecnologia.png" },
    18: { title: "Tecnologia 9", description: "Descrição da imagem Tecnologia 9", src: "/tecnologia.png" },
    19: { title: "Animal 1", description: "Descrição da imagem Animal 1", src: "/Animais.png" },
    20: { title: "Animal 2", description: "Descrição da imagem Animal 2", src: "/Animais.png" },
    21: { title: "Animal 3", description: "Descrição da imagem Animal 3", src: "/Animais.png" },
    22: { title: "Animal 4", description: "Descrição da imagem Animal 4", src: "/Animais.png" },
    23: { title: "Animal 5", description: "Descrição da imagem Animal 5", src: "/Animais.png" },
    24: { title: "Animal 6", description: "Descrição da imagem Animal 6", src: "/Animais.png" },
    25: { title: "Animal 7", description: "Descrição da imagem Animal 7", src: "/Animais.png" },
    26: { title: "Animal 8", description: "Descrição da imagem Animal 8", src: "/Animais.png" },
    27: { title: "Animal 9", description: "Descrição da imagem Animal 9", src: "/Animais.png" },
    28: { title: "Roupa 1", description: "Descrição da imagem Roupa 1", src: "/thugnine.png" },
    29: { title: "Roupa 2", description: "Descrição da imagem Roupa 2", src: "/thugnine.png" },
    30: { title: "Roupa 3", description: "Descrição da imagem Roupa 3", src: "/thugnine.png" },
    31: { title: "Roupa 4", description: "Descrição da imagem Roupa 4", src: "/thugnine.png" },
    32: { title: "Roupa 5", description: "Descrição da imagem Roupa 5", src: "/thugnine.png" },
    33: { title: "Roupa 6", description: "Descrição da imagem Roupa 6", src: "/thugnine.png" },
    34: { title: "Roupa 7", description: "Descrição da imagem Roupa 7", src: "/thugnine.png" },
    35: { title: "Roupa 8", description: "Descrição da imagem Roupa 8", src: "/thugnine.png" },
    36: { title: "Roupa 9", description: "Descrição da imagem Roupa 9", src: "/thugnine.png" },
};

const ImageDetail = () => {
    const { id } = useParams();
    const image = imageDetails[id]; // Obtém os detalhes da imagem com base no ID

    if (!image) {
        return <h2>Imagem não encontrada</h2>; // Mensagem de erro se a imagem não existir
    }

    return (
        <div className="image-detail">
            <h2>{image.title}</h2>
            <img src={image.src} alt={image.title} className="large-image" />
            <p>{image.description}</p>
        </div>
    );
};

export default ImageDetail;
