import './App.css';
import MainMenu from './components/MainMenu/MainMenu';
import SearchBar from './components/SearchBar/SearchBar';
import FeaturedPlayLists from './components/FeaturedPlayLists/FeaturedPlayLists';
import ProfileViews from './components/ProfileViews/ProfileViews';
import Tracks from './components/Tracks/Tracks';

function App() {
  return (
    <div>
      <MainMenu/>
      <div className="content">
        <SearchBar/>
        <div className="musics">
          <FeaturedPlayLists/>
          <ProfileViews/>
          <Tracks/>
        </div>
      </div>
    </div>
  );
}

export default App;
