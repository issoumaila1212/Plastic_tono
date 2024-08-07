import React, { useState } from 'react';

import './LoginForm.css'
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/LOGO_PLASTIC.png';


const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="Plastic tono" className="logo"/>
      </div>
      <form  className="login_form">
        <h2>Connexion</h2>
        <input
          type="text"
          placeholder="Entrez le nom d’utilisateur"
          className="login-usermane"
        />
        <input
           type={passwordVisible ? "text" : "password"}
          placeholder="Entrez le mot de passe"
          className="login-password"
        />
        <button type="submit" className="login-button">Se connecter</button>
      </form>
    </div>
  )
}

export default LoginForm