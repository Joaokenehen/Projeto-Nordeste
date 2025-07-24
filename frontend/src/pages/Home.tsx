import { useNavigate } from "react-router-dom";
import '../styles/Home.css';
import logo from '../assets/logo2.png';

function Home() {
  const navigate = useNavigate();

  // Função para abrir o sistema de chamados
  const openSupport = () => {
    window.open('https://suporte.expnordeste.com.br', '_blank');
  };

  return (
    <div className="home-container">
      <div className="buttons-container">
        {/* Logo no canto superior esquerdo */}
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        {/* Botões no canto superior direito */}
        <div className="buttons-right">
          <button onClick={() => navigate('/login')}>Entrar</button>
          <button onClick={() => navigate('/cadastro')}>Cadastrar-se</button>
          <button 
            onClick={openSupport} 
            style={{ backgroundColor: 'yellow', color: 'black' }}>
            Chamado T.I
          </button>
        </div>
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
          <div className="item">Wi-Fi</div>
          <div className="item">CPU'S</div>
          <div className="item">DVR'S e Câmeras</div>
          <div className="item">Starlink's</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
