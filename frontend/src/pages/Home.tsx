import { useNavigate } from "react-router-dom";
import '../styles/Home.css'

function Home() {
    const navigate = useNavigate();

     return (
    <div className="home-container">
      <div className="buttons-container">
        <button onClick={() => navigate('/login')}>Entrar</button>
        <button onClick={() => navigate('/cadastro')}>Cadastrar-se</button>
      </div>
      <div className="mensagem-container">
        <h1>
          Seja Bem-Vindo ao Sistema <strong>NorthWay</strong>
        </h1>
        <p>Sistema para Controle de:</p>
        <div className="itens-container">
           <div className="item">Estoque</div>
          <div className="item">Impressoras</div>
          <div className="item">Toners</div>
          <div className="item">Pinpads</div>
          <div className="item">GPOS</div>
          <div className="item">Faturas</div>
        </div>
      </div>
    </div>
  );
}


export default Home;