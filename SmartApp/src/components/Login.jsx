import React, { useState } from "react";
import "./Login.css";
import DashBoard from "./Dashboard";
import Cadastro from "./Cadastro";
import painelImg from "../assets/painel.png";

function Login() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [logado, setLogado] = useState(false); // Estado para controlar se o usuário está logado

  async function handleLogin(event) {
    event.preventDefault(); // Evita o reload da página
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!usuario || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.email === usuario && user.senha === senha
      );

      if (user) {
        // Login bem-sucedido, altera o estado para mostrar o Dashboard
        setLogado(true);
      } else {
        alert("Usuário ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      alert("Erro ao conectar com o servidor. Tente novamente.");
    }
  }

  // Se estiver logado, renderiza o Dashboard
  if (logado) {
    return <DashBoard />;
  }

  return (
    <section className="fundo">
      <div className="mainContainer"></div>
      <div className="Banner">
        <img src={painelImg} alt="SmartHome Logo" className="logosmart" />
      </div>

      {!mostrarCadastro ? (
        <div className="LoginContainer">
          <form className="LoginForm" onSubmit={handleLogin}>
            <input
              id="usuario"
              type="email"
              placeholder="usuário@email.com"
              className="email"
            />
            <input
              id="senha"
              type="password"
              placeholder="Senha..."
              className="senha"
            />
            <button type="submit">Entrar</button>
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
    </section>
  );
}

export default Login;
