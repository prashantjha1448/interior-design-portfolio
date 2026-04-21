import React, { useContext } from 'react'
import {AuthContext } from '../context/AuthContext'
import { useForm } from 'react-hook-form'

const Loging = ({ settoogle }) => {
  const {registerUser }=useContext(AuthContext)

  

const {register , handleSubmit ,reset , formState:{isValid , errors}} = useForm({mode : onchange})



const handleFormSubmit =(data)=>{
  let logUser = registerUser.find((elem)=>elem.email === data.email && elem.password === data.password)

     if(!logUser){
        alert("user not found")
        return
    }
  localStorage.setItem("log user " , JSON.stringify(logUser))
    alert("user logged in ")

    reset()

}



  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Jost:wght@200;300;400;500&display=swap');

        .auth-root {
          min-height: 100vh;
          background: #060503;
          display: flex;
          font-family: 'Jost', sans-serif;
        }
        .auth-panel-left {
          flex: 1;
          background: linear-gradient(160deg, #0d0b08 0%, #060503 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          position: relative;
          overflow: hidden;
        }
        .auth-panel-left::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -20%;
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(197,160,78,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .auth-panel-left::after {
          content: 'MB';
          position: absolute;
          bottom: -40px;
          right: -20px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 18rem;
          font-weight: 600;
          color: rgba(197,160,78,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .auth-left-content {
          position: relative;
          z-index: 2;
          max-width: 360px;
        }
        .auth-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 600;
          color: #c5a04e;
          letter-spacing: 0.06em;
          margin-bottom: 56px;
          display: inline-block;
        }
        .auth-brand span { color: #fff; }
        .auth-left-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .auth-left-heading em { font-style: italic; color: #e8d5a3; }
        .auth-left-sub {
          font-size: 0.85rem;
          font-weight: 200;
          color: rgba(255,255,255,0.35);
          line-height: 1.8;
        }
        .auth-left-divider {
          width: 40px;
          height: 1px;
          background: rgba(197,160,78,0.4);
          margin: 36px 0;
        }
        .auth-left-stat {
          display: flex;
          gap: 40px;
        }
        .auth-stat-item {}
        .auth-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #c5a04e;
          line-height: 1;
        }
        .auth-stat-label {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-top: 4px;
        }

        /* Right Panel */
        .auth-panel-right {
          width: 480px;
          flex-shrink: 0;
          background: #0a0806;
          border-left: 1px solid rgba(197,160,78,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 56px;
        }
        .auth-form-wrap { width: 100%; }
        .auth-form-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c5a04e;
          margin-bottom: 12px;
        }
        .auth-form-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 300;
          color: #fff;
          margin-bottom: 48px;
          line-height: 1.2;
        }

        .form-field { margin-bottom: 32px; }
        .form-label {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(197,160,78,0.6);
          margin-bottom: 10px;
        }
        .form-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          padding: 10px 0;
          outline: none;
          transition: border-color 0.3s;
          box-sizing: border-box;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.15); }
        .form-input:focus { border-bottom-color: #c5a04e; }

        .form-forgot {
          display: flex;
          justify-content: flex-end;
          margin-top: -16px;
          margin-bottom: 40px;
        }
        .form-forgot a {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          letter-spacing: 0.08em;
          transition: color 0.3s;
        }
        .form-forgot a:hover { color: #c5a04e; }

        .btn-auth {
          width: 100%;
          padding: 16px;
          background: #c5a04e;
          color: #060503;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .btn-auth:hover { background: #d4b26a; transform: translateY(-2px); }

        .auth-switch {
          margin-top: 36px;
          text-align: center;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.25);
          font-weight: 300;
        }
        .auth-switch button {
          background: none;
          border: none;
          color: #c5a04e;
          cursor: pointer;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          padding: 0;
          margin-left: 6px;
          transition: color 0.3s;
        }
        .auth-switch button:hover { color: #d4b26a; text-decoration: underline; }

        @media (max-width: 900px) {
          .auth-panel-left { display: none; }
          .auth-panel-right { width: 100%; border-left: none; padding: 80px 32px; }
        }
      `}</style>

      <div className="auth-root">
        {/* Left Decorative Panel */}
        <div className="auth-panel-left">
          <div className="auth-left-content">
            <div className="auth-brand">Prashant<span>Jha</span></div>
            <h2 className="auth-left-heading">Welcome<br /><em>Back</em></h2>
            <p className="auth-left-sub">
              Your spaces await. Sign in to explore your projects and continue crafting extraordinary interiors.
            </p>
            <div className="auth-left-divider" />
            <div className="auth-left-stat">
              <div className="auth-stat-item">
                <div className="auth-stat-num">100+</div>
                <div className="auth-stat-label">Projects</div>
              </div>
              <div className="auth-stat-item">
                <div className="auth-stat-num">50+</div>
                <div className="auth-stat-label">Clients</div>
              </div>
              <div className="auth-stat-item">
                <div className="auth-stat-num">4.9★</div>
                <div className="auth-stat-label">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="auth-panel-right">
          <div className="auth-form-wrap">
            <p className="auth-form-eyebrow">Welcome Back</p>
            <h1 className="auth-form-title">Sign In</h1>

            {/* Email */}
            <form 
            onSubmit={handleSubmit(handleFormSubmit)}
            >
              <div className="form-field">
              <label className="form-label">Email Address</label>
              <input 
              {
                ...register("email" , {
                  required : "email is reqired ",
                  pattern :{
                    value : /^\S+@\S+$/i,
                    message :"Invalid email"
                }
                })
                
              } 
              type="email" placeholder="your@email.com" className="form-input" />

                 {
                  errors.email && <p className='text-sm text-red-500 '>{errors.email.message}</p>
                 }
            </div>

            {/* Password */}
            <div className="form-field">
              <label className="form-label">Password</label>
              <input 
              {
                ...register("password" ,{
                  required : "password is required",
                  minLength :{
                    value : 6
                  }
                })
              }
              type="password" placeholder="••••••••" className="form-input" />

                 {
                  errors.firstname && <p className='text-sm text-red-500 '>{errors.password.message}</p>
                 }
            </div>

            <div className="form-forgot">
              <a href="#">Forgot password?</a>
            </div>

            <button 
            disabled={!isValid}
            className="btn-auth">Sign In</button>
            </form>

            <div className="auth-switch">
              Don't have an account?
              <button 
              onClick={() => settoogle(false)}>Create one</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loging
