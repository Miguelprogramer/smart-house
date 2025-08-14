import React from "react"
import './Login.css'
function Login() {
    const API_URL = 'http://localhost:3000'

    async function Entrar() {

    }

  return (
    <>
        <div className="mainContainer">

            </div>
            <div className="Banner">
                <img src="../src/assets/painel.png" alt="SmartHome Logo" className="logosmart"/>
            </div>

            <div className="LoginContainer">
                
                <form className="LoginForm">
                    <input type="text" placeholder="usuário@email.com" className="usuario"/>
                    <input type="password" placeholder="Senha..." className="senha"/>
                    <a href=""><button type="submit">Entrar</button></a>
                    <br/>
                    <br/>
                    <a href="Cadastro.jsx" className="cadastro">Cadastre-se</a>
                </form>
            </div>
        <div/>

    </>
  );
}

export default Login;