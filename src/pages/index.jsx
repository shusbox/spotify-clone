import Header from '../components/header.jsx'
import MusicPlayer from '../components/musicPlayer.jsx'
import { Add, Hide, Start } from '../assets/icons.jsx'
import { cover1 } from '../assets/cover/index.jsx'
import '../css/main.css'

function Library() {
  function LibraryBox({ title, txt, btn }) {
    return (
      <div className='library-box'>
        <div className='library-box-title'>
          <h3> {title} </h3>
          <p> {txt} </p>
        </div>
        <div className='library-box-btn'> <p> {btn} </p> </div>
      </div>
    )
  }

  return (
    <div id='library'>
      <div id='library-title'>
        <div id='library-title-txt-container'>
          <div id='library-title-txt-icons'>
            <Hide size={"16"} />
          </div>
          <h2 id='library-title-txt'> 내 라이브러리 </h2>
        </div>
        <div id='library-create'>
          <Add size={"16"} />
          <p id='library-create-txt'> 만들기 </p>
        </div>
      </div>
      <div id='library-container'>
        <LibraryBox
          title={"첫 번째 플레이리스트를 만드세요."}
          txt={"어렵지 않아요, 저희가 도와드릴게요."}
          btn={"플레이리스트 만들기"}
        />
        <LibraryBox
          title={"팔로우할 팟캐스트를 찾아보세요"}
          txt={"새로운 에피소드에 대한 소식을 알려드릴게요."}
          btn={"팟캐스트 둘러보기"}
        />
      </div>
    </div>
  )
}

function Content() {
  return (
    <div id='content'>
      <div id='content-header'>
        <button id='content-header-select' className='content-header-selecter'> 모두 </button>
        <button className='content-header-selecter'> 음악 </button>
        <button className='content-header-selecter'> 팟캐스트 </button>
      </div>
      <div id='content-main'>
        <div className='content-main-suggestion'>
          <h2> 들어볼 만한 음악 </h2>
        </div>
        <div id='content-main-playlist-container'>
          <div className='content-main-playlist'>
            <div className='content-main-cover-container'>              
              <div className='content-main-icons'> <Start size={"20"} /> </div>
              <img className='content-main-cover' src={cover1} />
            </div>
            <p className='content-main-txt'> AIRI KANNA, 스텔라이브 및 HoneyChrrous</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Index() {
  return (
    <div id='index'>
      <Header />
      <main>
        <Library />
        <div className='main-line' />
        <Content />
      </main>
      <MusicPlayer />
    </div>
  )
}

export default Index