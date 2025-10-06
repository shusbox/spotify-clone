import { Wrapper } from '../styles/common.js'
import Header from '../components/header.jsx'
import Library from '../components/library.jsx'
import MusicPlayer from '../components/musicPlayer.jsx'
import PremiumContent from '../components/premiumContent.jsx'
import '../css/main.css'

function Premium() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Library />
        <div className='main-line' />
        <PremiumContent />
      </main>
      <MusicPlayer />
    </Wrapper>
  )
}

export default Premium