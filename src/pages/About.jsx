import React, { useEffect, useRef } from "react"
import aboutImg from "../assets/iamge6.avif"

const About = () => {
  const statsRef = useRef(null)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Jost:wght@200;300;400;500&display=swap');

        .about-root {
          background: #060503;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
          color: #fff;
        }
        .about-hero {
          padding: 140px 40px 80px;
          max-width: 1280px;
          margin: 0 auto;
          border-bottom: 1px solid rgba(197,160,78,0.1);
        }
        .about-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #c5a04e;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }
        .about-eyebrow::before {
          content: '';
          width: 40px;
          height: 1px;
          background: #c5a04e;
          display: block;
        }
        .about-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 300;
          line-height: 1.08;
          color: #fff;
          max-width: 600px;
        }
        .about-heading em {
          font-style: italic;
          color: #e8d5a3;
        }

        .about-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .about-img-wrap::before {
          content: '';
          position: absolute;
          inset: -1px;
          border: 1px solid rgba(197,160,78,0.25);
          z-index: 2;
          pointer-events: none;
        }
        .about-img-wrap img {
          width: 100%;
          height: 560px;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
          filter: brightness(0.88) saturate(0.8);
        }
        .about-img-wrap:hover img { transform: scale(1.04); }

        .about-text-block {}
        .about-text-label {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #c5a04e;
          margin-bottom: 20px;
          font-weight: 400;
        }
        .about-text-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 28px;
        }
        .about-text-body {
          color: rgba(255,255,255,0.45);
          font-size: 0.92rem;
          line-height: 1.9;
          font-weight: 200;
          margin-bottom: 18px;
        }
        .about-cta {
          display: inline-block;
          margin-top: 36px;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 400;
          padding: 15px 38px;
          background: transparent;
          border: 1px solid rgba(197,160,78,0.5);
          color: #c5a04e;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }
        .about-cta:hover {
          background: #c5a04e;
          color: #060503;
          border-color: #c5a04e;
        }

        .about-stats {
          max-width: 1280px;
          margin: 0 auto;
          padding: 70px 40px 100px;
          border-top: 1px solid rgba(197,160,78,0.1);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        .stat-item {
          padding: 40px 32px;
          border: 1px solid rgba(197,160,78,0.1);
          transition: border-color 0.3s, background 0.3s;
          text-align: left;
        }
        .stat-item:hover {
          border-color: rgba(197,160,78,0.4);
          background: rgba(197,160,78,0.03);
        }
        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 300;
          color: #c5a04e;
          line-height: 1;
          margin-bottom: 12px;
        }
        .stat-label {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          font-weight: 400;
        }

        @media (max-width: 900px) {
          .about-content { grid-template-columns: 1fr; gap: 48px; }
          .about-stats { grid-template-columns: 1fr 1fr; }
          .about-hero { padding: 120px 24px 60px; }
          .about-content { padding: 60px 24px; }
          .about-stats { padding: 60px 24px 80px; }
        }
        @media (max-width: 500px) {
          .about-stats { grid-template-columns: 1fr 1fr; gap: 16px; }
          .stat-item { padding: 28px 20px; }
        }
      `}</style>

      <section className="about-root">
        <div className="about-hero">
          <p className="about-eyebrow">Who We Are</p>
          <h1 className="about-heading">Designing <em>Spaces</em><br />That Inspire</h1>
        </div>

        <div className="about-content">
          <div className="about-img-wrap">
            <img src={aboutImg} alt="Our Studio" />
          </div>

          <div className="about-text-block">
            <p className="about-text-label">Our Philosophy</p>
            <h2 className="about-text-heading">We Create Modern<br />Interiors</h2>
            <p className="about-text-body">
              Our team specializes in creating elegant and luxurious interior designs tailored to your needs. From modern kitchens to cozy living spaces, we transform ideas into reality.
            </p>
            <p className="about-text-body">
              With years of experience and a passion for design, we ensure every project reflects quality, comfort, and style — crafted with precision, finished with care.
            </p>
            <a href="/contact" className="about-cta">Get In Touch</a>
          </div>
        </div>

        <div className="about-stats">
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
            { number: '4.9★', label: 'Client Rating' },
          ].map(({ number, label }) => (
            <div className="stat-item" key={label}>
              <div className="stat-number">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
