import React, { useState, useEffect } from "react";
import "./Load.css";
import Login from "./Login"; // igual o Login importa o DashBoard
import logo from "../assets/logo.png";

function LoadScreen() {
  const [mostrarLogin, setMostrarLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarLogin(true); // depois de 5s, troca pra tela de login
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (mostrarLogin) {
    return <Login />; // 👈 mesma lógica do Login.jsx (troca componente)
  }

  return (
    <div className="load-screen">
      <img src={logo} alt="SmartHome Logo" className="logo" />
    </div>
  );
}

export default LoadScreen;
