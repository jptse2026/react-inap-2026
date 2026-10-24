import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Layout from './components/Layout';
import Vehiculos from './components/Vehiculos';
import VehiculoDetalle from './components/VehiculoDetalle';
import Servicios from './components/Servicios';
import About from './components/About';

function ReactRouter () {

  return (
    <div className="app-shell">
      <header className="portal-header">
        <div className="portal-brand">
          <span className="portal-brand-mark" aria-hidden="true">DGT</span>
          <div>
            <p className="portal-eyebrow">Dirección General de Tráfico</p>
            <h1>Portal de Tráfico</h1>
          </div>
        </div>
        <p className="portal-caption">Información y servicios de movilidad · Demo educativa</p>
      </header>
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
    </div>
  )
}

export default ReactRouter
