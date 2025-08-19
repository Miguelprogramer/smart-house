import React, { useState } from "react";
import "./Login.css";
import Cadastro from "./Cadastro";

function Login() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  async function Entrar() {
  }

  return (
    <>
      <div className="mainContainer"></div>
      <div className="Banner">
        <img
          src="../src/assets/painel.png"
          alt="SmartHome Logo"
          className="logosmart"
        />
      </div>

      {!mostrarCadastro ? (
        <div className="LoginContainer">
          <form className="LoginForm" onSubmit={Entrar}>
            <input
              type="text"
              placeholder="usuário@email.com"
              className="usuario"
            />
            <input type="password" placeholder="Senha..." className="senha" />
            <button type="submit">Entrar</button>
            <br />
            <br />
            <a
              type="button"
              className="cadastro"
              onClick={() => setMostrarCadastro(true)}
            >
              Cadastre-se
            </a>
          </form>
        </div>
      ) : (
        <Cadastro />
      )}
    </>
  );
}

export default Login;
