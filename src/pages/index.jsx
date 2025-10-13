import { Wrapper } from '../styles/common.js'
import Header from '../components/header.jsx'
import MusicPlayer from '../components/musicPlayer.jsx'
import Library from '../components/library.jsx'
import MainContent from '../components/contentMain.jsx'
import ContentPlaylist from '../components/contentPlaylist.jsx'
import '../css/main.css'

function Index() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Library />
        <div className='main-line' />
        <MainContent />
        <div className='main-line' />
        <ContentPlaylist />
      </main>
      <MusicPlayer />
    </Wrapper>
  )
}

export default Index