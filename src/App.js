import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

/* import Navegacion from './Componentes/Navegacion';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer'; */

/* import Traslados from './Componentes/Traslados';
import Formulario from './Componentes/Formulario';
import Contacto from './Componentes/Contacto'; */

/* import Arcoiris from './Componentes/Arcoiris';
import Medanos from './Componentes/Medanos'; */
import Loader from './Componentes/Loader'

const Navegacion = lazy(() => import("./Componentes/Navegacion"))
const Home = lazy(() => import("./Componentes/Home"))
const Footer = lazy(() => import("./Componentes/Footer"))
const Arcoiris = lazy(() => import("./Componentes/Arcoiris"))
const Medanos = lazy(() => import("./Componentes/Medanos"))
const Formulario = lazy(() => import("./Componentes/Formulario"))
const Contacto = lazy(() => import("./Componentes/Contacto"))
const Traslados = lazy(() => import("./Componentes/Traslados"))    

  

function App() {
  return (
  <> 
    <Suspense fallback={<Loader />}>
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
  </Suspense>
</>     
  );
}

export default App;
