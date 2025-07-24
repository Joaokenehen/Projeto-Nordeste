// src/components/Sidebar.js
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h2>NorthWay</h2>
      <nav>
        <ul>
          <li onClick={() => navigate('/dashboard')}>🏠 Home</li>
          <li onClick={() => navigate('/dashboard/usuarios')}>👤 Usuários</li>
          <li onClick={() => navigate('/dashboard/toners')}>🧴 Toners</li>
          <li onClick={() => navigate('/dashboard/impressoras')}>🖨️ Impressoras</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
