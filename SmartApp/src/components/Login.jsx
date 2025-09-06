import React, { useState } from "react";
import "./Login.css";
import DashBoard from "./DashBoard";
import Cadastro from "./Cadastro";
import painelImg from "../assets/painel.png";

function Login() {
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const [logado, setLogado] = useState(false);
  const [mensagem, setMensagem] = useState(""); 
  const [usuarioLogado, setUsuarioLogado] = useState(""); // 👈 novo estado para o nome

  async function handleLogin(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!usuario || !senha) {
      setMensagem("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.email === usuario && user.senha === senha
      );

      if (user) {
        setUsuarioLogado(user.nome); // 👈 pega o nome do usuário
        setLogado(true);
      } else {
        setMensagem("Usuário ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      setMensagem("Erro ao conectar com o servidor. Tente novamente.");
    }
  }

  if (logado) {
    return <DashBoard usuario={usuarioLogado} />; // 👈 passa como prop
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

          {mensagem && <p className="mensagem-erro">{mensagem}</p>}
        </div>
      ) : (
        <Cadastro />
      )}
    </section>
  );
}

export default Login;
