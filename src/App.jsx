import SideBar from './components/SideBar';
import Post from './components/Post';
import Story from './components/Story';
import Sugestion from './components/Sugestion';
import posts from './data/posts.json';
import './App.css';

function App() {
  return (
    <div className="layout">
      {/* 1. Barra Lateral */}
      <SideBar />

      {/* 2. Feed Central */}
      <main className="main-content">
        <Story />

        <section className="feed" aria-label="Feed de publicações">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      </main>

      {/* 3. Coluna Direita */}
      <aside className="suggestions-container">
        <Sugestion />
      </aside>

      {/* ☁️ 1. GOKU VOANDO NO CÉU (DIREITA -> ESQUERDA) */}
      <div className="goku-flying">
        <img 
          src="/gifs/dbz.gif" 
          alt="Goku na Nuvem Voadora" 
          className="goku-flying-gif" 
        />
      </div>

      {/* ⚡ 2. PIKACHU CORRENDO NO CHÃO (ESQUERDA -> DIREITA) */}
      <div className="pikachu-running">
        <img 
          src="/gifs/pikachu.gif" 
          alt="Pikachu correndo" 
          className="pikachu-running-gif" 
        />
      </div>

      {/* 🚶 3. PATRICK ANDANDO NO CHÃO (ESQUERDA -> DIREITA) */}
      <div className="patrick-walking">
        <img 
          src="/gifs/patrick-walking.gif" 
          alt="Patrick andando" 
          className="patrick-gif" 
        />
      </div>

      {/* 💃 4. MASHA E O URSO SOLTOS E GRANDES NO CANTO INFERIOR DIREITO */}
      <div className="masha-dancing-corner" title="Masha e o Urso dançando!">
        <img 
          src="/gifs/masha-urso.gif" 
          alt="Masha e o Urso Dançando" 
          className="masha-gif" 
        />
      </div>

    </div>
  );
}

export default App;