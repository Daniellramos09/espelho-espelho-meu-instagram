// Personagens clássicos sugeridos para seguir!
const suggestionsData = [
  { 
    id: 1, 
    user: 'johnny_bravo', 
    subtitle: 'Uooo Mama! • Seguido por mordecai', 
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Johnny&backgroundColor=1f1f1f' 
  },
  { 
    id: 2, 
    user: 'docinho_ppg', 
    subtitle: 'Meninas Superpoderosas • Seguido por finn', 
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Buttercup&backgroundColor=1f1f1f' 
  },
  { 
    id: 3, 
    user: 'lindinha_ppg', 
    subtitle: 'Meninas Superpoderosas • Seguido por gumball', 
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Bubbles&backgroundColor=1f1f1f' 
  },
  { 
    id: 4, 
    user: 'samurai_jack', 
    subtitle: 'Guerreiro do Tempo • 12 seguidores em comum', 
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Samurai&backgroundColor=1f1f1f' 
  },
  { 
    id: 5, 
    user: 'steven_universo', 
    subtitle: 'Crystal Gems • Seguido por jake_o_cao', 
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Steven&backgroundColor=1f1f1f' 
  },
  { 
    id: 6, 
    user: 'macaco_louco', 
    subtitle: 'Vilão de Saltadilla • Seguido por dexter_lab', 
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Mojo&backgroundColor=1f1f1f' 
  },
  { 
    id: 7, 
    user: 'bmo_game', 
    subtitle: 'Console vivo • Seguido por finn_humano', 
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=BMO&backgroundColor=1f1f1f' 
  }
];

function Sugestion() {
  return (
    <div className="suggestions-box">
      <div className="suggestions-header">
        <span className="suggestions-title">Sugestões do Cartoon Network</span>
        <button className="suggestions-see-all" type="button">Ver tudo</button>
      </div>

      <div className="suggestions-list">
        {suggestionsData.map((item) => (
          <div key={item.id} className="suggestion-item">
            <img src={item.avatar} alt={item.user} className="suggestion-avatar" />
            
            <div className="suggestion-info">
              <span className="suggestion-user">{item.user}</span>
              <span className="suggestion-sub">{item.subtitle}</span>
            </div>

            <button className="suggestion-follow-btn" type="button">
              Seguir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sugestion;