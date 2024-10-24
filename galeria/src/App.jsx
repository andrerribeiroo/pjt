// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header'; // Certifique-se de que o caminho está correto
import Home from './home/Home'; // Verifique o nome da pasta e do arquivo
import ImageDetail from './image/imageDetail'; // O componente de detalhes
import Natureza from './temas/Natureza'; // Componente Natureza
import Animais from './temas/Animais'; // Componente Animais
import Tecnologia from './temas/Tecnologia'; // Componente Tecnologia
import Roupa from './temas/Roupa';
import Hardware from './temas/Hardware';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />

        {/* Título LOREM IPSUM no topo */}
        <h1 style={{ textAlign: 'center', marginTop: '10px' }}>LOREM IPSUM</h1>
        
        <div className="App">
          {/* Configurando as rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/image/:id" element={<ImageDetail />} />
            <Route path="/natureza" element={<Natureza />} />
            <Route path="/animais" element={<Animais />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/roupa" element={<Roupa />} />
            <Route path="/hardware" element={<Hardware />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
