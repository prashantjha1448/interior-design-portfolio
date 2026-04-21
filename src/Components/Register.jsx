import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useForm } from 'react-hook-form'

const Register = ({ settoogle }) => {

  const {registerUser, setRegisterUser }=useContext(AuthContext)
  
    
  
  const {register , handleSubmit ,reset , formState:{isValid , errors}} = useForm({mode : onchange})

 const handleFormSubmit = (data)=>{
  let arr = [...registerUser , data]
        setRegisterUser(arr)
        localStorage.setItem("register-user" , JSON.stringify(arr));

        alert("user registered sucessfully")
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
        .auth-left-features { display: flex; flex-direction: column; gap: 16px; }
        .auth-feature {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.35);
          font-weight: 200;
        }
        .auth-feature-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c5a04e;
          flex-shrink: 0;
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
          overflow-y: auto;
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
          margin-bottom: 40px;
          line-height: 1.2;
        }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .form-field { margin-bottom: 28px; }
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

        .form-terms {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 32px;
          margin-top: -4px;
        }
        .form-terms input[type="checkbox"] {
          width: 14px;
          height: 14px;
          accent-color: #c5a04e;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .form-terms-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.25);
          font-weight: 200;
          line-height: 1.6;
        }
        .form-terms-label a {
          color: #c5a04e;
          text-decoration: none;
        }

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
          margin-top: 32px;
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
        @media (max-width: 500px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="auth-root">
        {/* Left Panel */}
        <div className="auth-panel-left">
          <div className="auth-left-content">
            <div className="auth-brand">Prashant<span>Jha</span></div>
            <h2 className="auth-left-heading">Join the<br /><em>Studio</em></h2>
            <p className="auth-left-sub">
              Start your journey toward extraordinary spaces. Create your account and access our world of design.
            </p>
            <div className="auth-left-divider" />
            <div className="auth-left-features">
              {[
                'Personalized project dashboard',
                'Access to exclusive design resources',
                'Direct consultation with our team',
                'Priority booking & support',
              ].map(f => (
                <div className="auth-feature" key={f}>
                  <span className="auth-feature-dot" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="auth-panel-right">
          <div className="auth-form-wrap">
            <p className="auth-form-eyebrow">Create Account</p>
            <h1 className="auth-form-title">Get Started</h1>

            <form 
            onSubmit={handleSubmit(handleFormSubmit)}
            >
              <div className="form-row">
              <div className="form-field">
                <label className="form-label">First Name</label>
                <input
                {
                  ...register("firstname" ,{
                    required : "* enter your first name ",
                    minLength :{
                      value : 3 ,
                      type : String,
                    }


                  })
                }
                 type="text" placeholder="John" className="form-input" />

                 {
                  errors.firstname && <p className='text-sm text-red-500 '>{errors.firstname.message}</p>
                 }
              </div>


              <div className="form-field">
                <label className="form-label">Last Name</label>
                <input 
                {
                  ...register("last-Name")
                }
                type="text" placeholder="Doe" className="form-input" />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Email Address</label>
              <input 
              {...register("email",{
                required : "email is required",
                pattern : {
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

            <div className="form-field">
              <label className="form-label">Password</label>
              <input
              {
                ...register("password" , {
                  required : "please enter password",
                  minLength : {
                    value : 6 ,
                    message : "Please enter minimum 6 digits"
                  }
                })
              }
               type="password" placeholder="Create a strong password" className="form-input" />

                 {
                  errors.password && <p className='text-sm text-red-500 '>{errors.password.message}</p>
                 }
            </div>

            <div className="form-field">
              <label className="form-label">Confirm Password</label>
              <input 
              {
                ...register("password" , {
                  required : "please enter confirm password",
                  minLength : {
                    value : 6,
                    message : "please enter minimum 6 digits"
                  }
                })
              }
              type="password" placeholder="••••••••" className="form-input" />

                 {
                  errors.password && <p className='text-sm text-red-500 '>{errors.password.message}</p>
                 }
            </div>

            <div className="form-terms">
              <input type="checkbox" id="terms" />
              <label className="form-terms-label" htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button
            disabled={!isValid}
             className="btn-auth">Create Account</button>
            </form>

            <div className="auth-switch">
              Already have an account?
              <button onClick={() => settoogle(true)}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
