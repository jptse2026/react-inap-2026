import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/vehiculos">Vehículos</NavLink>
        <NavLink to="/servicios">Servicios</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
      </nav>
      <main className="portal-content">
        <Outlet />
      </main>
      <footer className="portal-footer">
        <span>Portal de Tráfico</span>
        <span>Proyecto de demostración · No oficial</span>
      </footer>
    </>
  );
}
