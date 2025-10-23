import { Content } from '../styles/common.js'
import { cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8 } from '../assets/cover/index.jsx'
import { Start } from '../assets/icons.jsx'
import '../css/content.css'

function MainContent() {
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
  // 이미지에 alt 속성 추가하는게 좋을거같아요 그리고 동적 데이터 확장을 위해 data 파일로 분리시키면 깔끔할 것 같습니다

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
  });

  const playlist_num = {
    1: content_main_playlist_1,
    2: content_main_playlist_2
  };

  function ContentMainPlaylistContainer({ num, title }) {
    const recall = playlist_num[num];
    return (
      <div className='content-main-suggestion-container'>
        <div className='content-main-suggestion-im'>
          <h2 className='content-main-suggestion'> {title} </h2>
          <p className='content-main-suggestion-txt'> 모두 표시 </p>
        </div>
        <div id='content-main-playlist-container'>
          {recall}
        </div>      
      </div>
    )
  }

  return (
    <Content>
      <div id='content-header'>
        <button id='content-header-select' className='content-header-selecter'> 모두 </button>
        <button className='content-header-selecter'> 음악 </button>
        <button className='content-header-selecter'> 팟캐스트 </button>
      </div>
      <div id='content-main'>
        <ContentMainPlaylistContainer num={1} title={"들어볼 만한 음악"} />
        <ContentMainPlaylistContainer num={2} title={"추천 차트"} />
      </div>
      <footer></footer>
    </Content>
  )
}

export default MainContent