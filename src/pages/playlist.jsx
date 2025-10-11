import { Wrapper, Content } from '../styles/common.js';
import Header from '../components/header.jsx';
import Library from '../components/library.jsx';
import MusicPlayer from '../components/musicPlayer.jsx';
import PlaylistHeader from '../components/playlist/header.jsx';
import PlaylistList from '../components/playlist/list.jsx';
import PlaylistMusic from '../components/playlist/music.jsx';
import '../css/main.css';

const Playlist = () => {
  const PlaylistContent = () => {
    return (
      <Content id='playlist-content'>
        <PlaylistHeader />
        <PlaylistList />
        <PlaylistMusic />
      </Content>
    )
  };

  return (
    <Wrapper>
      <Header />
      <main>
        <Library />
        <div className='main-line' />
        <PlaylistContent />
      </main>
      <MusicPlayer />
    </Wrapper>
  )
};

export default Playlist;