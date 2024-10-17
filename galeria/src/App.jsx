// src/App.jsx
import React from 'react';
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer';
import './App.css'





function App() {
    return (
        <>
            <Header/>


            <div className="App">

            <h1>Galeria de Imagens</h1>
            
            <Home/>

            </div>

            <Footer/>
        </>
    );
}

export default App;