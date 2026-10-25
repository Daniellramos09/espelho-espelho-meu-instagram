import { FiChevronRight } from 'react-icons/fi';

// A turma do Cartoon Network nos Stories!
const storiesData = [
  { id: 1, user: 'finn_humano', avatar: '/gifs/finn-jake.gif' },
  { id: 2, user: 'jake_o_cao', avatar: '/gifs/adventure-time.gif' },
  { id: 3, user: 'mordecai', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mordecai&backgroundColor=1f1f1f' },
  { id: 4, user: 'rigby', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Rigby&backgroundColor=1f1f1f' },
  { id: 5, user: 'gumball', avatar: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Gumball&backgroundColor=1f1f1f' },
  { id: 6, user: 'darwin', avatar: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Darwin&backgroundColor=1f1f1f' },
  { id: 7, user: 'dexter_lab', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dexter&backgroundColor=1f1f1f' },
  { id: 8, user: 'ben_10', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Ben10&backgroundColor=1f1f1f' },
  { id: 9, user: 'coragem_cao', avatar: 'https://api.dicebear.com/7.x/croodles/svg?seed=Courage&backgroundColor=1f1f1f' }
];

function Story() {
  return (
    <div className="stories-wrapper">
      <div className="stories-list">
        {storiesData.map((story) => (
          <div key={story.id} className="story-item" title={`Story de @${story.user}`}>
            <div className="story-ring">
              <img 
                src={story.avatar} 
                alt={`Story de ${story.user}`} 
                className="story-avatar" 
              />
            </div>
            <span className="story-username">{story.user}</span>
          </div>
        ))}
      </div>

      <button className="stories-scroll-btn" type="button" aria-label="Avançar stories">
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Story;