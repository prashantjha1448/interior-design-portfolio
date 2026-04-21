import React from "react"

const WorkCard = ({ item }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Jost:wght@200;300;400&display=swap');

        .work-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/5;
          background: #0d0b08;
        }
        .work-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s;
          filter: brightness(0.75) saturate(0.7);
        }
        .work-card:hover .work-card-img {
          transform: scale(1.08);
          filter: brightness(0.5) saturate(0.6);
        }
        .work-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6,5,3,0.9) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .work-card:hover .work-card-overlay { opacity: 1; }

        .work-card-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 32px 28px;
          transform: translateY(16px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .work-card:hover .work-card-body {
          transform: translateY(0);
          opacity: 1;
        }
        .work-card-tag {
          font-family: 'Jost', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #c5a04e;
          margin-bottom: 10px;
          font-weight: 400;
        }
        .work-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        .work-card-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.3s;
        }
        .work-card-link::after {
          content: '';
          width: 24px;
          height: 1px;
          background: currentColor;
          transition: width 0.3s;
        }
        .work-card:hover .work-card-link { color: #c5a04e; }
        .work-card:hover .work-card-link::after { width: 36px; }

        .work-card-num {
          position: absolute;
          top: 20px;
          right: 24px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255,255,255,0.25);
          transition: color 0.3s;
        }
        .work-card:hover .work-card-num { color: rgba(197,160,78,0.5); }
      `}</style>

      <div className="work-card">
        <img
          src={item.image}
          alt={item.title}
          className="work-card-img"
        />
        <div className="work-card-overlay" />
        <span className="work-card-num">0{item.id}</span>

        <div className="work-card-body">
          <p className="work-card-tag">Interior Design</p>
          <h2 className="work-card-title">{item.title}</h2>
          <span className="work-card-link">View Project</span>
        </div>
      </div>
    </>
  )
}

export default WorkCard
