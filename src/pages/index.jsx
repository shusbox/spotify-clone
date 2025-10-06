import { Wrapper } from '../styles/common.js'
import Header from '../components/header.jsx'
import MusicPlayer from '../components/musicPlayer.jsx'
import Library from '../components/library.jsx'
import Content from '../components/content.jsx'
import '../css/main.css'

function Index() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Library />
        <div className='main-line' />
        <Content />
      </main>
      <MusicPlayer />
    </Wrapper>
  )
}

export default Index