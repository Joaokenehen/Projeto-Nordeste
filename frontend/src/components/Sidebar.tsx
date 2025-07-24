import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Sidebar.css';

// Defina o tipo das chaves dos menus
type MenuKey = 'administrativo' | 'estoque' | 'acesso';

function Sidebar() {
  const navigate = useNavigate();

  const [openMenus, setOpenMenus] = useState<Record<MenuKey, boolean>>({
    administrativo: false,
    estoque: false,
    acesso: false,
  });

  const toggleMenu = (menu: MenuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleLogout = () => {
  // Implemente aqui o que acontece ao sair (exemplo: redirecionar para o login ou limpar o estado)
  navigate('/login');
};

  return (
    <aside className="sidebar">
      <h2>NorthWay</h2>
      <nav>
        <ul>
          <li onClick={() => navigate('/dashboard')}>🏠 Home</li>

          <li onClick={() => toggleMenu('acesso')}>🔐 Módulo Acesso</li>
          {openMenus.acesso && (
            <ul className="submenu">
              <li onClick={() => navigate('/dashboard/usuarios')}>👤 Usuários</li>
              <li onClick={() => navigate('/dashboard/perfis')}>🛡️ Perfil</li>
            </ul>
          )}

          <li onClick={() => toggleMenu('administrativo')}>📂 Módulo Administrativo</li>
          {openMenus.administrativo && (
            <ul className="submenu">
              <li onClick={() => navigate('/dashboard/faturas')}>📄 Faturas</li>
              <li onClick={() => navigate('/dashboard/notas')}>🧾 Notas</li>
            </ul>
          )}

          <li onClick={() => toggleMenu('estoque')}>📦 Módulo Estoque</li>
          {openMenus.estoque && (
            <ul className="submenu">
              <li onClick={() => navigate('/dashboard/perifericos')}>🧩 Periféricos</li>
              <li onClick={() => navigate('/dashboard/impressoras')}>🖨️ Impressoras</li>
              <li onClick={() => navigate('/dashboard/toners')}>🧪 Toners</li>
              <li onClick={() => navigate('/dashboard/notebooks')}>💻 Notebooks</li>
              <li onClick={() => navigate('/dashboard/computadores')}>🖥️ Computadores</li>
              <li onClick={() => navigate('/dashboard/gpos')}>💳 GPOS</li>
              <li onClick={() => navigate('/dashboard/pinpads')}>💳 Pinpad's</li>
              <li onClick={() => navigate('/dashboard/modens')}>🌐 Modens</li>
              <li onClick={() => navigate('/dashboard/dvrsecameras')}>📷 DVR'S e Câmeras</li>
              <li onClick={() => navigate('/dashboard/starlinks')}>🚀 Starlink's</li>
            </ul>
          )}

          <li className="logout-btn" onClick={handleLogout}>🚪 Sair</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
