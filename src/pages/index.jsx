import Header from '../components/header.jsx'
import MusicPlayer from '../components/musicPlayer.jsx'
import { Add, Hide, Start } from '../assets/icons.jsx'
import { cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8 } from '../assets/cover/index.jsx'
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
  function ContentMainPlaylist({ img, txt }) {
    return (
      <div className='content-main-playlist'>
        <div className='content-main-cover-container'>              
          <div className='content-main-icons'> <Start size={"20"} /> </div>
          <img className='content-main-cover' src={img} />
        </div>
        <p className='content-main-txt'> {txt} </p>
      </div>
    )
  }
  const content_main_playlist_arr_1 = [
    { type: "playlist", img: cover1, txt: "Neckwav 및 TWICE" },
    { type: "playlist", img: cover2, txt: "AIRI KANNA, 스텔라이브 및 HoneyChurros" }
  ];

  const content_main_playlist_arr_2 = [
    { type: "playlist", img: cover3, txt: "현재 가장 많이 재생된 트랙의 일일 업데이트입니다" },
    { type: "playlist", img: cover4, txt: "현재 가장 많이 재생된 트랙의 일일 업데이트입니다" },
    { type: "playlist", img: cover5, txt: "현재 가장 많이 재생된 트랙의 일일 업데이트입니다" },
    { type: "playlist", img: cover6, txt: "현재 가장 많이 재생된 트랙의 일일 업데이트입니다" },
    { type: "playlist", img: cover7, txt: "현재 가장 많이 재생된 트랙의 일일 업데이트입니다" },
    { type: "playlist", img: cover8, txt: "현재 가장 많이 재생된 트랙의 일일 업데이트입니다" }
  ];

  const content_main_playlist_1 = content_main_playlist_arr_1.map((item, index) => {
    return (
      <div key={index} className='content-main-playlist'>
        <div className='content-main-cover-container'>              
          <div className='content-main-icons'> <Start size={"20"} /> </div>
          <img className='content-main-cover' src={item.img} />
        </div>
        <p className='content-main-txt'> {item.txt} </p>
      </div>
    )
  });

  const content_main_playlist_2 = content_main_playlist_arr_2.map((item, index) => {
    return <ContentMainPlaylist key={index} img={item.img} txt={item.txt} />
  })

  const playlist_num = {
    1: content_main_playlist_1,
    2: content_main_playlist_2
  };

  function ContentMainPlaylistContainer({ num, title }) {
    const recall = playlist_num[num];
    return (
      <>
        <h2 className='content-main-suggestion'> {title} </h2>
        <div id='content-main-playlist-container'>
          {recall}
        </div>      
      </>
    )
  }

  return (
    <div id='content'>
      <div id='content-header'>
        <button id='content-header-select' className='content-header-selecter'> 모두 </button>
        <button className='content-header-selecter'> 음악 </button>
        <button className='content-header-selecter'> 팟캐스트 </button>
      </div>
      <div id='content-main'>
        <ContentMainPlaylistContainer num={1} title={"들어볼 만한 음악"} />
        <ContentMainPlaylistContainer num={2} title={"추천 차트"} />
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