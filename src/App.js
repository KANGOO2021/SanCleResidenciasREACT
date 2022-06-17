import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navegacion from './Componentes/Navegacion';
import Formulario from './Componentes/Formulario';
import Footer from './Componentes/Footer';  
import Contacto from './Componentes/Contacto';
import Traslados from './Componentes/Traslados';
import Home from './Componentes/Home';
import Arcoiris from './Componentes/Arcoiris';
import Medanos from './Componentes/Medanos';

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
