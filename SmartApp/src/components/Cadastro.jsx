import React, { useState } from "react";
import "./Cadastro.css";

export default function Cadastro() {
  const [erro, setErro] = useState("");

    async function Cadastrar(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const nome  = form.nome.value.trim();
    const fone  = form.fone.value.trim();
    const email = form.email.value.trim();
    const senha = form.senha.value.trim();
    const csenha = form.csenha.value.trim();

    if (!nome || !fone || !email || !senha || !csenha) {
      alert("Preencha todos os campos!");
      return;
    }


    if (senha !== csenha) {
      alert("As senhas não coincidem.");
      return;
    }

    if (nome) {
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, fone, email, senha })
            })
    } else {
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, fone, email, senha })
        })
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "/login";
  }

  return (
    <div className="CadastroContainer">
      <form className="Form" onSubmit={Cadastrar} noValidate>
        <h1>Cadastre-se</h1>

        <input type="text"     id="nome"   name="nome"   placeholder="Nome completo" />
        <input type="tel"      id="fone"   name="fone"   placeholder="Telefone" />
        <input type="email"    id="email"  name="email"  placeholder="nome@email.com" />
        <input type="password" id="senha"  name="senha"  placeholder="Senha..." />
        <input type="password" id="csenha" name="csenha" placeholder="Confirmar Senha..." />

        <button >Cadastrar</button>
      </form>
    </div>
  );
}
