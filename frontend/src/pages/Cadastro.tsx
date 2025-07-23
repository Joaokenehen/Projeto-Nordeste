// src/Pages/Cadastro.tsx
import AuthLayout from '../components/AuthLayout';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <AuthLayout sideContent={
      <div>
        <h1>NorthWay</h1>
        <img src="src/images/logo2.png" alt="Logo" />
        <p>Sistema desenvolvido para:<br></br><strong>Expresso Nordeste Linhas Rodoviárias LTDA</strong><br></br>(44) 3518-4000</p>
      </div>
    }>
      <h2>Cadastrar-se</h2>
      <form>
        <div>
          <label>Nome:</label><br />
          <input type="text" placeholder="Digite seu nome" />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" placeholder="Digite seu email" />
        </div>
        <div>
          <label>CPF:</label><br />
          <input type="cpf" placeholder="Digite seu CPF" />
        </div>
        <div>
          <label>Senha:</label><br />
          <input type="password" placeholder="Crie uma senha" />
        </div>
        <div>
          <label>Confirmar Senha:</label><br />
          <input type="password" placeholder="Crie uma senha" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem usuário cadastrado? <Link className="links" to="/login"> Vá para Login!</Link>  Ou volte para <Link className="links" to="/"> Home</Link> e saiba mais!
      </p>
    </AuthLayout>
  );
}

export default Cadastro;
