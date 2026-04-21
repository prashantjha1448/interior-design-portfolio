import React, { useEffect, useRef } from "react"
import bg from "../assets/iamge2.jpg"

const Hero = () => {
  const headRef = useRef(null)

  useEffect(() => {
    const el = headRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@200;300;400&display=swap');

        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 640px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: #060503;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url(${bg});
          background-size: cover;
          background-position: center;
          transform: scale(1.05);
          animation: heroZoom 10s ease forwards;
        }
        @keyframes heroZoom {
          to { transform: scale(1); }
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(6,5,3,0.92) 0%,
            rgba(6,5,3,0.5) 40%,
            rgba(6,5,3,0.2) 70%,
            rgba(6,5,3,0.55) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px 90px;
          width: 100%;
        }
        .hero-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #c5a04e;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hero-eyebrow::before {
          content: '';
          display: inline-block;
          width: 40px;
          height: 1px;
          background: #c5a04e;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 300;
          line-height: 1.02;
          color: #fff;
          letter-spacing: -0.01em;
          margin: 0 0 8px;
        }
        .hero-title em {
          font-style: italic;
          color: #e8d5a3;
        }
        .hero-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 1rem;
          font-weight: 200;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.08em;
          margin: 18px 0 40px;
          max-width: 420px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .btn-primary {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 400;
          padding: 16px 40px;
          background: #c5a04e;
          color: #060503;
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover {
          background: #d4b26a;
          transform: translateY(-2px);
        }
        .btn-ghost {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.3s;
          text-decoration: none;
        }
        .btn-ghost::after {
          content: '→';
          transition: transform 0.3s;
        }
        .btn-ghost:hover {
          color: #fff;
        }
        .btn-ghost:hover::after {
          transform: translateX(5px);
        }
        .hero-scroll {
          position: absolute;
          bottom: 36px;
          right: 40px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          writing-mode: vertical-rl;
        }
        .hero-scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, #c5a04e, transparent);
          animation: scrollAnim 2s ease-in-out infinite;
        }
        @keyframes scrollAnim {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.5); opacity: 0.3; }
        }
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px 70px; }
          .hero-scroll { display: none; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-overlay" />

        <div ref={headRef} className="hero-content">
          <p className="hero-eyebrow">Award-Winning Studio</p>
          <h1 className="hero-title">
            Interior<br /><em>Design</em>
          </h1>
          <p className="hero-subtitle">
            We craft spaces that whisper luxury — tailored to your vision, built for how you live.
          </p>
          <div className="hero-actions">
            <a href="/work" className="btn-primary">Explore Work</a>
            <a href="/about" className="btn-ghost">Our Story</a>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </section>
    </>
  )
}

export default Hero
