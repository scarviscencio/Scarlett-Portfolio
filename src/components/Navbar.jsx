import { useEffect, useState } from 'react';
import Wordmark from './Wordmark.jsx';
import Icon from './Icon.jsx';

const links = [['inicio', 'Inicio'], ['proyectos', 'Proyectos'], ['sobre-mi', 'Sobre mí'], ['contacto', 'Contacto']];

export default function Navbar({ onContact }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setOpen(false); };
    const closeOnDesktop = () => { if (window.innerWidth > 760) setOpen(false); };
    const closeOnNavigation = () => setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    window.addEventListener('hashchange', closeOnNavigation);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
      window.removeEventListener('hashchange', closeOnNavigation);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="navbar shell">
        <Wordmark />
        <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
          {open ? <Icon name="close" /> : <><span></span><span></span></>}
        </button>
        <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegación principal">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <button className="nav-contact" onClick={() => { setOpen(false); onContact(); }}>Hablemos <Icon name="diagonal" /></button>
        </nav>
      </div>
    </header>
  );
}
