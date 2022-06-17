import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navegacion from './Componentes/Navegacion';
import Home from './Componentes/Home';
import Arcoiris from './Componentes/Arcoiris';
import Medanos from './Componentes/Medanos';
import Traslados from './Componentes/Traslados';
import Formulario from './Componentes/Formulario';
import Contacto from './Componentes/Contacto';
import Footer from './Componentes/Footer';  

function App() {
  return (
    <>
      <Navegacion />

      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/arcoiris" element={<Arcoiris />} />

        <Route exact path="/medanos" element={<Medanos />} />
        
        <Route exact path="/consultas" element={<Formulario />} />

        <Route exact path="/contacto" element={< Contacto />} />

        <Route exact path="/traslados" element={<Traslados />} />

      </Routes>

      <Footer />
      
    </>
  );
}

export default App;
