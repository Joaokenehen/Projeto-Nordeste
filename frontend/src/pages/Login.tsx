// src/Pages/Login.tsx
import AuthLayout from '../components/AuthLayout';
import { Link } from 'react-router-dom';
import '../styles/Login.css'
import logo from '../assets/logo2.png';

function Login() {
  return (
    <AuthLayout sideContent={
      <div>
        <h1>NorthWay</h1>
        <img src={logo} alt="Logo" />
        <p>Sistema desenvolvido para:<br></br><strong>Expresso Nordeste Linhas Rodoviárias LTDA</strong><br></br>(44) 3518-4000</p>
      </div>
    }>
      <h2>Entrar</h2>
      <form>
        <div>
          <label>Email:</label><br />
          <input type="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label>Senha:</label><br />
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Ainda não tem cadastro? 
        <strong>
          <Link  className="links" to="/cadastro"> Realize por aqui!</Link> 
        </strong>
      </p>
    </AuthLayout>
  );
}

export default Login;
