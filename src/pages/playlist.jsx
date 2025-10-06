import { Wrapper } from '../styles/common.js'
import Header from '../components/header.jsx'
import Library from '../components/library.jsx'
import MusicPlayer from '../components/musicPlayer.jsx'
import '../css/main.css'

function Playlist() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Library />
        <div className='main-line' />
      </main>
      <MusicPlayer />
    </Wrapper>
  )
}

export default Playlist