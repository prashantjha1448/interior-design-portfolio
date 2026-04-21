import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Jost:wght@300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.5s ease, backdrop-filter 0.5s ease, box-shadow 0.5s ease;
          font-family: 'Jost', sans-serif;
        }
        .nav-root.scrolled {
          background: rgba(6, 5, 3, 0.88);
          backdrop-filter: blur(18px);
          box-shadow: 0 1px 0 rgba(197,160,78,0.15);
        }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #c5a04e;
          text-decoration: none;
        }
        .nav-brand span {
          color: #fff;
        }
        .nav-links {
          display: flex;
          gap: 40px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nav-links a {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 400;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.3s;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #c5a04e;
          transition: width 0.35s ease;
        }
        .nav-links a:hover,
        .nav-links a.active {
          color: #c5a04e;
        }
        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }
        .nav-cta {
          background: transparent;
          border: 1px solid rgba(197,160,78,0.5);
          color: #c5a04e;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 9px 22px;
          cursor: pointer;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
          text-decoration: none;
        }
        .nav-cta:hover {
          background: #c5a04e;
          color: #060503;
          border-color: #c5a04e;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #c5a04e;
          transition: all 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 0;
          background: #060503;
          border-top: 1px solid rgba(197,160,78,0.15);
          padding: 0 40px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s;
        }
        .mobile-menu.open {
          max-height: 300px;
          padding: 20px 40px 28px;
        }
        .mobile-menu a {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 12px 0;
          border-bottom: 1px solid rgba(197,160,78,0.08);
          transition: color 0.3s;
        }
        .mobile-menu a:hover, .mobile-menu a.active { color: #c5a04e; }

        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }
          .nav-inner { padding: 18px 24px; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <NavLink to="/" className="nav-brand">Prashant<span>Jha</span></NavLink>

          <ul className="nav-links">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => isActive ? 'active' : ''}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/auth" className="nav-cta">Get Started</NavLink>

          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? 'active' : ''}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar
