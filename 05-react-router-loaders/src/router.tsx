import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import AboutRuta from './components/About/About.ruta';
import VehiculoDetalleRuta from './components/VehiculoDetalle/VehiculoDetalle.ruta';
import HomeRuta from "./components/Home/Home.ruta";
import VehiculosRuta from "./components/Vehiculos/Vehiculos.ruta";
import ServiciosRuta from "./components/Servicios/Servicios.ruta";
import NotFoundRuta from "./components/NotFound/NotFound.ruta";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1 style={{ padding: 24 }}>❌ Error de navegación</h1>,
    children: [
      HomeRuta,
      VehiculosRuta,
      ServiciosRuta,
      AboutRuta,
      VehiculoDetalleRuta,
      NotFoundRuta,
    ],
  },
]);
