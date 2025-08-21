import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirecionamento
import "./Login.css";
import Cadastro from "./Cadastro";

function Login() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

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
        // Login bem-sucedido, redireciona para o Dashboard
        navigate("/Dashboard");
      } else {
        alert("Usuário ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      alert("Erro ao conectar com o servidor. Tente novamente.");
    }
  }

  return (
    <section className="fundo">
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
          <form className="LoginForm" onSubmit={handleLogin}>
            <input
              id="usuario"
              type="email" // Alterado para type="email" para melhor semântica
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
            <button
              type="button"
              className="cadastro"
              onClick={() => setMostrarCadastro(true)}
            >
              Cadastre-se
            </button>
          </form>
        </div>
      ) : (
        <Cadastro />
      )}
    </section>
  );
}

export default Login;