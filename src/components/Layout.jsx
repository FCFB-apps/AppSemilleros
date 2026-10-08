import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation, site } from '../content/site';

function BrandLogo({ logo }) {
  const [failed, setFailed] = useState(false);

  if (failed || !logo.src) {
    return (
      <span className={`brand-logo brand-logo-fallback brand-logo-${logo.id}`}>
        {logo.shortLabel}
      </span>
    );
  }

  return (
    <span className={`brand-logo brand-logo-${logo.id}`}>
      <img src={logo.src} alt={`Logo ${logo.shortLabel}`} onError={() => setFailed(true)} />
    </span>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const umsaLogo = site.logos.find((logo) => logo.id === 'umsa');
  const facultyLogo = site.logos.find((logo) => logo.id === 'fcfb');

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <div className="institutional-bar">
        <div className="container">
          <span className="institutional-brand">
            {umsaLogo && <BrandLogo logo={umsaLogo} />}
            <span>{site.university}</span>
          </span>
          <span>
            {site.faculty} <span className="bar-divider">/</span> {site.location}
          </span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="brand"
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Semilleros de la Facultad de Ciencias Farmacéuticas y Bioquímicas, inicio"
          >
            <span className="brand-logos" aria-label="Logo de la facultad">
              {facultyLogo && <BrandLogo logo={facultyLogo} />}
            </span>
            <span className="brand-copy">
              <strong>
                Semilleros<span className="brand-dot">.</span>
              </strong>
              <small>INVESTIGACIÓN · {site.faculty}</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            id="main-navigation"
            aria-label="Navegación principal"
            className={menuOpen ? 'main-nav open' : 'main-nav'}
          >
            {navigation.map((item) => (
              <NavLink
                end={item.to === '/'}
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link className="nav-contact" to="/#contacto" onClick={() => setMenuOpen(false)}>
              Conversemos <ArrowUpRight size={15} />
            </Link>
          </nav>
        </div>
      </header>
      {site.demo && (
        <div className="demo-banner">
          <span className="status-dot" /> Prototipo en desarrollo{' '}
          <span className="demo-banner-detail">
            · Los semilleros mostrados son ejemplos, no una oferta oficial.
          </span>
        </div>
      )}
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer id="contacto" className="site-footer">
        <div className="container footer-top">
          <div>
            <Link className="footer-brand" to="/">
              semilleros<span>.</span>
            </Link>
            <p>
              La curiosidad nos reúne.
              <br />
              La investigación nos conecta.
            </p>
          </div>
          <div className="footer-institution">
            <p className="eyebrow">NUESTRA FACULTAD</p>
            <p>{site.faculty}</p>
            <p>
              {site.university}
              <br />
              {site.location}
            </p>
          </div>
          <div>
            <p className="eyebrow">ESTEMOS EN CONTACTO</p>
            {site.contactEmail ? (
              <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            ) : (
              <p>
                El canal de contacto institucional
                <br />
                se publicará próximamente.
              </p>
            )}
            <Link className="footer-link" to="/recursos">
              Consulta las preguntas frecuentes <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>{site.faculty} · UMSA</span>
          <span>Una comunidad para aprender investigando.</span>
          <span>Versión de demostración</span>
        </div>
      </footer>
    </>
  );
}
