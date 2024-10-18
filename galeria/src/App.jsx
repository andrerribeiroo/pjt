// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header'; // Certifique-se de que o caminho está correto
import Home from './home/Home'; // Verifique o nome da pasta e do arquivo
import ImageDetail from './image/ImageDetail'; // O componente de detalhes
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />

        {/* Título LOREM IPSUM no topo */}
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>LOREM IPSUM</h1>

        <div className="App">
          {/* Configurando as rotas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/image/:id" element={<ImageDetail />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
