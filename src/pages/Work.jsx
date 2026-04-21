import React, { useContext, useState } from "react"
import { Data } from "../context/DataContext"
import WorkCard from "../components/WorkCard"

const Work = () => {
  const { workData } = useContext(Data)
  const [visible, setVisible] = useState(3)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Jost:wght@200;300;400&display=swap');

        .work-root {
          background: #060503;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
          color: #fff;
        }
        .work-hero {
          padding: 140px 40px 70px;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid rgba(197,160,78,0.1);
        }
        .work-hero-left {}
        .work-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #c5a04e;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .work-eyebrow::before {
          content: ''; width: 40px; height: 1px; background: #c5a04e; display: block;
        }
        .work-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.08;
        }
        .work-heading em { font-style: italic; color: #e8d5a3; }
        .work-count {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          font-weight: 300;
          color: rgba(197,160,78,0.15);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .work-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 70px 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .work-load-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 40px 100px;
          flex-direction: column;
          gap: 16px;
        }
        .btn-load-more {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 400;
          padding: 16px 48px;
          background: transparent;
          border: 1px solid rgba(197,160,78,0.4);
          color: #c5a04e;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-load-more:hover {
          background: #c5a04e;
          color: #060503;
          border-color: #c5a04e;
          transform: translateY(-2px);
        }
        .load-note {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
        }

        @media (max-width: 900px) {
          .work-grid { grid-template-columns: 1fr 1fr; }
          .work-hero { flex-direction: column; align-items: flex-start; gap: 16px; padding: 120px 24px 56px; }
          .work-grid { padding: 56px 24px; }
        }
        @media (max-width: 600px) {
          .work-grid { grid-template-columns: 1fr; gap: 0; }
          .work-load-wrap { padding-bottom: 70px; }
        }
      `}</style>

      <section className="work-root">
        <div className="work-hero">
          <div className="work-hero-left">
            <p className="work-eyebrow">Portfolio</p>
            <h1 className="work-heading">Our <em>Work</em></h1>
          </div>
          <div className="work-count">{String(workData?.length || 0).padStart(2, '0')}</div>
        </div>

        <div className="work-grid">
          {workData?.slice(0, visible).map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>

        {visible < (workData?.length || 0) && (
          <div className="work-load-wrap">
            <button className="btn-load-more" onClick={() => setVisible(visible + 3)}>
              Load More
            </button>
            <span className="load-note">{workData.length - visible} more projects</span>
          </div>
        )}
      </section>
    </>
  )
}

export default Work
