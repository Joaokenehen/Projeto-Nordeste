// src/pages/Dashboard.js
import Sidebar from "../components/Sidebar";
import '../styles/Dashboard.css';

function Dashboard({ userName = "Usuário" }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <div className="welcome-container">
          <h1>Bem-vindo, <span>{userName}</span></h1>
          <img src="src/images/logo2.png" alt="Ônibus NorthWay" className="onibus-img" />
          <h1>Sistema NorthWay</h1>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
