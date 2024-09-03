// src/pages/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logique d'authentification
    // Pour l'instant, redirige vers le tableau de bord
    if (username === "admin" && password === "admin") {
      navigate("/dashboard");
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/path/to/logo.png" alt="Plastic Tôno" className="logo" />
        <p>Valorisez vos déchets plastiques</p>
      </div>
      <div className="login-right">
        <div className="login-form">
          <h2>Connexion</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Entrez le nom d’utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Entrez le mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <button type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
