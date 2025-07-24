// src/pages/Dashboard.js
import Sidebar from "../components/Sidebar";
import '../styles/Dashboard.css';
import logo from '../assets/logo2.png'; 

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main-content">
        <div className="welcome-container">
          <h1>Bem-vindo</h1>
          <img src={logo} alt="Ônibus NorthWay" className="onibus-img" /> 
          <h1>Sistema NorthWay</h1>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
