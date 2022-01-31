import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="tela">
      <div className="login">
        <h1>Login</h1>
        <input type="email" placeholder="Email" autoFocus />
        <br /> <br />
        <input type="password" placeholder="Senha" />
        <br />
        <div className="senha">
          <input type="checkbox" className="boxx" />
          <label>Lembra Senha</label>
        </div>
        <br /> <br />
        <button>Entrar</button>
        <br /> <br />
        <a href=""> Cadastro de novo usuario</a>
      </div>
    </div>
  );
}
