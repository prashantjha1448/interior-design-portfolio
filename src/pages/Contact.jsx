import React from "react"

const Contact = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Jost:wght@200;300;400;500&display=swap');

        .contact-root {
          background: #060503;
          min-height: 100vh;
          font-family: 'Jost', sans-serif;
          color: #fff;
        }
        .contact-hero {
          padding: 140px 40px 70px;
          max-width: 1280px;
          margin: 0 auto;
          border-bottom: 1px solid rgba(197,160,78,0.1);
        }
        .contact-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #c5a04e;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .contact-eyebrow::before {
          content: ''; width: 40px; height: 1px; background: #c5a04e; display: block;
        }
        .contact-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.1;
        }
        .contact-heading em { font-style: italic; color: #e8d5a3; }

        .contact-body {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px 100px;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Form */
        .contact-form { display: flex; flex-direction: column; gap: 0; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .field-wrap { display: flex; flex-direction: column; gap: 8px; }
        .field-label {
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(197,160,78,0.7);
          font-weight: 400;
        }
        .field-input,
        .field-textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 0.92rem;
          font-weight: 300;
          padding: 12px 0;
          outline: none;
          transition: border-color 0.3s;
          width: 100%;
        }
        .field-input::placeholder, .field-textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .field-input:focus, .field-textarea:focus {
          border-bottom-color: #c5a04e;
        }
        .field-textarea { resize: none; height: 140px; }
        .field-full { margin-bottom: 24px; }
        .contact-submit {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .btn-submit {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 400;
          padding: 16px 48px;
          background: #c5a04e;
          color: #060503;
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .btn-submit:hover { background: #d4b26a; transform: translateY(-2px); }
        .submit-note {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.25);
          font-weight: 200;
        }

        /* Info Panel */
        .contact-info { padding-top: 12px; }
        .info-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 300;
          color: #fff;
          line-height: 1.4;
          margin-bottom: 36px;
        }
        .info-divider {
          width: 40px;
          height: 1px;
          background: #c5a04e;
          margin-bottom: 36px;
        }
        .info-item {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          margin-bottom: 28px;
        }
        .info-icon {
          font-size: 0.75rem;
          color: #c5a04e;
          margin-top: 4px;
          flex-shrink: 0;
          font-style: normal;
        }
        .info-text-label {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(197,160,78,0.6);
          margin-bottom: 4px;
        }
        .info-text-val {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
        }
        .info-socials {
          display: flex;
          gap: 0;
          margin-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 36px;
        }
        .social-btn {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          padding: 10px 20px;
          border: 1px solid rgba(255,255,255,0.08);
          margin-right: -1px;
          transition: color 0.3s, border-color 0.3s, background 0.3s;
          font-family: 'Jost', sans-serif;
          background: transparent;
        }
        .social-btn:hover {
          color: #c5a04e;
          border-color: rgba(197,160,78,0.4);
          background: rgba(197,160,78,0.05);
          z-index: 1;
          position: relative;
        }

        @media (max-width: 900px) {
          .contact-body { grid-template-columns: 1fr; gap: 60px; }
          .contact-hero { padding: 120px 24px 56px; }
          .contact-body { padding: 60px 24px 80px; }
        }
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="contact-root">
        <div className="contact-hero">
          <p className="contact-eyebrow">Let's Connect</p>
          <h1 className="contact-heading">Have a <em>Project</em><br />In Mind?</h1>
        </div>

        <div className="contact-body">
          {/* Form */}
          <div className="contact-form">
            <div className="form-row">
              <div className="field-wrap">
                <label className="field-label">Your Name</label>
                <input type="text" placeholder="John Doe" className="field-input" />
              </div>
              <div className="field-wrap">
                <label className="field-label">Your Email</label>
                <input type="email" placeholder="john@email.com" className="field-input" />
              </div>
            </div>

            <div className="field-wrap field-full">
              <label className="field-label">Subject</label>
              <input type="text" placeholder="Interior Design Consultation" className="field-input" />
            </div>

            <div className="field-wrap">
              <label className="field-label">Your Message</label>
              <textarea placeholder="Tell us about your project..." className="field-textarea" />
            </div>

            <div className="contact-submit">
              <button className="btn-submit">Send Message</button>
              <span className="submit-note">We respond within 24hrs</span>
            </div>
          </div>

          {/* Info */}
          <div className="contact-info">
            <p className="info-tagline">
              We'd love to hear<br />from you.
            </p>
            <div className="info-divider" />

            {[
              { icon: '✉', label: 'Email', value: 'contact@mybrand.com' },
              { icon: '✆', label: 'Phone', value: '+91 9876543210' },
              { icon: '◎', label: 'Location', value: 'India' },
            ].map(({ icon, label, value }) => (
              <div className="info-item" key={label}>
                <em className="info-icon">{icon}</em>
                <div>
                  <div className="info-text-label">{label}</div>
                  <div className="info-text-val">{value}</div>
                </div>
              </div>
            ))}

            <div className="info-socials">
              {['Instagram', 'LinkedIn', 'Twitter'].map(s => (
                <button key={s} className="social-btn">{s}</button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
