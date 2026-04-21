import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Jost:wght@200;300;400&display=swap');

        .footer-root {
          background: #060503;
          border-top: 1px solid rgba(197,160,78,0.15);
          padding: 72px 40px 36px;
          font-family: 'Jost', sans-serif;
          margin-top: 0;
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr;
          gap: 60px;
        }
        .footer-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: #c5a04e;
          letter-spacing: 0.04em;
          margin-bottom: 16px;
        }
        .footer-brand-name span { color: #fff; }
        .footer-tagline {
          color: rgba(255,255,255,0.35);
          font-size: 0.85rem;
          font-weight: 200;
          line-height: 1.8;
          max-width: 280px;
        }
        .footer-col-title {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #c5a04e;
          margin-bottom: 24px;
          font-weight: 400;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-links a {
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 300;
          letter-spacing: 0.04em;
          transition: color 0.3s, padding-left 0.3s;
        }
        .footer-links a:hover {
          color: #c5a04e;
          padding-left: 6px;
        }
        .footer-contact-item {
          color: rgba(255,255,255,0.45);
          font-size: 0.85rem;
          font-weight: 300;
          margin-bottom: 12px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .footer-contact-icon {
          color: #c5a04e;
          font-style: normal;
          flex-shrink: 0;
        }
        .footer-socials {
          display: flex;
          gap: 20px;
          margin-top: 24px;
        }
        .footer-social-link {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: color 0.3s;
          position: relative;
          padding-bottom: 3px;
        }
        .footer-social-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #c5a04e;
          transition: width 0.3s;
        }
        .footer-social-link:hover { color: #c5a04e; }
        .footer-social-link:hover::after { width: 100%; }

        .footer-divider {
          max-width: 1280px;
          margin: 56px auto 0;
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.08em;
          font-weight: 300;
        }
        .footer-rights {
          font-size: 0.75rem;
          color: rgba(197,160,78,0.4);
          letter-spacing: 0.06em;
          font-weight: 300;
        }

        @media (max-width: 900px) {
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 600px) {
          .footer-root { padding: 56px 24px 32px; }
          .footer-inner { grid-template-columns: 1fr; gap: 36px; }
          .footer-divider { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">Prashant<span>Jha</span></div>
            <p className="footer-tagline">
              We transform spaces into refined sanctuaries — where luxury meets intention, and every detail tells your story.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-title">Navigation</p>
            <div className="footer-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/work">Work</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contact</p>
            <div className="footer-contact-item">
              <em className="footer-contact-icon">✉</em>
              prashantjha0108@gmail.com
            </div>
            <div className="footer-contact-item">
              <em className="footer-contact-icon">✆</em>
              +91 9981789795
            </div>
            <div className="footer-contact-item">
              <em className="footer-contact-icon">◎</em>
              India
            </div>

            <div className="footer-socials">
              <span className="footer-social-link">Instagram</span>
              <span className="footer-social-link">LinkedIn</span>
              <span className="footer-social-link">Twitter</span>
            </div>
          </div>
        </div>

        <div className="footer-divider">
          <span className="footer-copy">© {new Date().getFullYear()} MyBrand. All rights reserved.</span>
          <span className="footer-rights">Crafted with precision</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
