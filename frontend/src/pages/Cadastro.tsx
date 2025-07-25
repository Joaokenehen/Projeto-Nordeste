// src/Pages/Cadastro.tsx
import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";
import AuthLayout from '../components/AuthLayout';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';

function Cadastro() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
    birth_date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("As senhas não se coincidem.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          cpf: formData.cpf,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          birth_date: formData.birth_date,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Usuário cadastrado!");
        setFormData({
          name: "",
          email: "",
          cpf: "",
          password: "",
          confirmPassword: "",
          birth_date: "",
        });
      } else {
        setMessage(data.message || "Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      setMessage("Erro ao se conectar com o servidor.");
    }
  };

  return (
    <AuthLayout
      sideContent={
        <div>
          <h1>NorthWay</h1>
          <img src="src/images/logo2.png" alt="Logo" />
          <p>
            Sistema desenvolvido para:
            <br />
            <strong>Expresso Nordeste Linhas Rodoviárias LTDA</strong>
            <br />
            (44) 3518-4000
          </p>
        </div>
      }
    >
    <AuthLayout sideContent={
      <div>
        <h1>NorthWay</h1>
        <img src={logo} alt="Logo" />
        <p>Sistema desenvolvido para:<br></br><strong>Expresso Nordeste Linhas Rodoviárias LTDA</strong><br></br>(44) 3518-4000</p>
      </div>
    }>
      <h2>Cadastrar-se</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CPF:</label>
          <br />
          <input
            type="text"
            name="cpf"
            placeholder="Digite seu CPF"
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Senha:</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Crie uma senha"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirmar Senha:</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <br />
          <input
            type="date"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem usuário cadastrado?{" "}
        <Link className="links" to="/login">
          Vá para Login!
        </Link>{" "}
        Ou volte para{" "}
        <Link className="links" to="/">
          Home
        </Link>{" "}
        e saiba mais!
      </p>
    </AuthLayout>
  );
}

export default Cadastro;
