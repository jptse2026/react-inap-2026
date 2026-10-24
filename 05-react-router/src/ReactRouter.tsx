import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import Vehiculos from './components/Vehiculos';
import VehiculoDetalle from './components/VehiculoDetalle';
import Servicios from './components/Servicios';
import About from './components/About';

function ReactRouter () {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
        </div>
        <h2>PRÁCTICA DE REACT-ROUTER</h2>
        <div>
        </div>
      </section>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/vehiculos/:matricula" element={<VehiculoDetalle />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Route>
      </Routes>

      


      <div className="ticks"></div>
    </>
  )
}

export default ReactRouter

