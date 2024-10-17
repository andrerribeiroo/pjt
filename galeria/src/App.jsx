// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header'; // Certifique-se de que o caminho está correto (observe as maiúsculas)
import Home from './home/Home'; // Verifique o nome da pasta e do arquivo
import ImageDetail from './image/imageDetail'; // O componente de detalhes
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />

        <div className="App">

          <h1>Galeria de Imagens</h1>

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
