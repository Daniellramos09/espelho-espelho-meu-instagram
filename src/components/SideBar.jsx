import { 
  FiHome, 
  FiSearch, 
  FiPlusSquare, 
  FiHeart, 
  FiMenu, 
  FiFilm, 
  FiSend,
  FiInstagram,
  FiGrid
} from 'react-icons/fi';

function SideBar() {
  return (
    <aside className="sidebar">
      {/* 1. Topo: Logo do Instagram */}
      <div className="sidebar-top">
        <button className="sidebar-btn sidebar-logo" aria-label="Instagram">
          <FiInstagram size={24} />
        </button>
      </div>

      {/* 2. Meio: Lista principal de ícones de navegação */}
      <nav className="sidebar-nav">
        <button className="sidebar-btn active" aria-label="Página Inicial">
          <FiHome size={24} />
        </button>

        <button className="sidebar-btn" aria-label="Reels">
          <FiFilm size={24} />
        </button>

        {/* Botão de mensagens com o badge numérico vermelho */}
        <button className="sidebar-btn sidebar-btn-badge" aria-label="Mensagens">
          <FiSend size={24} />
          <span className="badge">5</span>
        </button>

        <button className="sidebar-btn" aria-label="Pesquisar">
          <FiSearch size={24} />
        </button>

        <button className="sidebar-btn" aria-label="Notificações">
          <FiHeart size={24} />
        </button>

        <button className="sidebar-btn" aria-label="Criar publicação">
          <FiPlusSquare size={24} />
        </button>

        {/* Avatar do perfil logado */}
        <button className="sidebar-btn sidebar-profile" aria-label="Perfil">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
            alt="Foto do perfil" 
            className="sidebar-avatar"
          />
        </button>
      </nav>

      {/* 3. Rodapé: Menu e Opções extras */}
      <div className="sidebar-bottom">
        <button className="sidebar-btn" aria-label="Mais opções">
          <FiMenu size={24} />
        </button>
        <button className="sidebar-btn" aria-label="Threads / Apps">
          <FiGrid size={24} />
        </button>
      </div>
    </aside>
  );
}

export default SideBar;