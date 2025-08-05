// Login.jsx
import React from "react";

const Login = () => (
  <>
    {/* Inline CSS for the component */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      html, body {
        height: 100%;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }

      .login-container {
        background: rgba(255, 255, 255, 0.85);
        border-radius: 15px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(8.5px);
        -webkit-backdrop-filter: blur(8.5px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        width: 350px;
        padding: 40px;
        animation: fadeInUp 1.5s ease forwards;
      }

      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      .login-title {
        text-align: center;
        color: #2e7d32;
        margin-bottom: 25px;
        font-size: 28px;
        font-weight: 700;
      }

      .input-group { margin-bottom: 20px; }

      .input-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #4a734a;
      }

      .input-group input {
        width: 100%;
        padding: 12px 15px;
        border: 2px solid #a3d9a5;
        border-radius: 10px;
        font-size: 16px;
        transition: border-color 0.3s ease;
        outline: none;
      }

      .input-group input:focus { border-color: #2e7d32; }

      .login-button {
        width: 100%;
        padding: 12px;
        background: #2e7d32;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        box-shadow: 0 8px 15px rgba(46, 125, 50, 0.4);
        animation: buttonPulse 2s infinite;
      }

      .login-button:hover { background-color: #1b4b20; }

      @keyframes buttonPulse {
        0%, 100% { box-shadow: 0 8px 15px rgba(46, 125, 50, 0.4); }
        50%      { box-shadow: 0 12px 25px rgba(46, 125, 50, 0.7); }
      }

      .nature-svg {
        display: block;
        margin: 0 auto 30px auto;
        width: 70px;
        height: 70px;
        fill: #4caf50;
        animation: rotate 10s linear infinite;
      }

      @keyframes rotate {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>

    {/* Login form markup */}
    <div className="login-container">
      <svg
        className="nature-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C13.66 2 15.32 3.24 16 5c1.5 3.5-2 8-4 12-2-4-5.5-8-4-12 .68-1.76 2.34-3 4-3z" />
        <line x1="12" y1="22" x2="12" y2="13" />
      </svg>

      <div className="login-title">Welcome to Nature Login</div>

      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  </>
);

export default Login;
