import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";

const activeNavClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "is-active" : "";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <div className="app-shell">
      <header className="portal-header">
        <div className="portal-masthead">
          <Link className="portal-brand" to="/" aria-label="Portal de Tráfico, inicio">
            <span className="portal-brand-mark" aria-hidden="true">DGT</span>
            <span className="portal-brand-copy">
              <strong>TRÁFICO</strong>
              <small>INFORMACIÓN Y MOVILIDAD</small>
            </span>
          </Link>
          <p className="portal-header-note">Movilidad segura, información clara</p>
        </div>
        <nav className="portal-nav" aria-label="Navegación principal">
          <NavLink to="/" end className={activeNavClass}>
            Inicio
          </NavLink>
          <NavLink to="/vehiculos" className={activeNavClass}>
            Vehículos
          </NavLink>
          <NavLink to="/servicios" className={activeNavClass}>
            Servicios
          </NavLink>
          <NavLink to="/about" className={activeNavClass}>
            La DGT
          </NavLink>
        </nav>
      </header>

      <main className="portal-content">
        {navigation.state === "loading" && (
          <div className="navigation-loading" role="status" aria-live="polite">
            <span className="loading-dot" aria-hidden="true" />
            <span>Cargando contenido…</span>
          </div>
        )}
        <Outlet />
      </main>

      <footer className="portal-footer">
        <span className="portal-footer-brand">
          <span>TRÁFICO</span>{" "}
          <span aria-hidden="true">·</span>{" "}
          <span>DGT</span>
        </span>
        <small>Proyecto educativo. No es un portal oficial de la DGT.</small>
      </footer>
    </div>
  );
}
