import { album1 } from '../assets/album/index.jsx'
import { ToggleShow, Shuffle, Loop, Pause, Start, Play, Previous, NowPlaying, Lyrics, Playlist, Sound, PIP, FullScreen, Connect } from '../assets/icons.jsx'
import '../css/musicPlayer.css'

function MusicPlayer() {
  const player_controls_arr = [
    { type: "icon", icon: Shuffle, txt: "셔플 활성화하기" },
    { type: "icon", icon: Play, txt: "이전" },
    { type: "play", icon: Start, txt: "재생하기" },
    { type: "icon", icon: Previous, txt: "다음" },
    { type: "icon", icon: Loop, txt: "반복 활성화하기" }
  ];

  const right_controls_arr = [
    { type: "icon", icon: NowPlaying, txt: "지금 재생 중 보기" },
    { type: "icon", icon: Lyrics, txt: "가사" },
    { type: "icon", icon: Playlist, txt: "재생목록" },
    { type: "icon", icon: Connect, txt: "기기에 연결하기" },
    { type: "sound", icon: Sound, txt: "음소거하기" },
    { type: "icon", icon: PIP, txt: "미니플레이어 열기" },
    { type: "icon", icon: FullScreen, txt: "전체 화면으로 전환" }
  ];

  const player_controls = player_controls_arr.map((item, index) => {
    const Comp = item.icon;
    if (item.type === "icon") return <div key={index} className='player-icons tooltip' tooltip-txt={item.txt}> <Comp size={"16"} /> </div>
    if (item.type === "play") return <div key={index} id='player-icons-pause' className='player-icons music-player-icons tooltip' tooltip-txt={item.txt}> <Comp size={"16"} /> </div>
  })

  const right_controls = right_controls_arr.map((item, index) => {
    const Comp = item.icon;
    if (item.type === "icon") return <div key={index} className='player-icons tooltip' tooltip-txt={item.txt}> <Comp size={"16"} /> </div>
    if (item.type === "sound") {
      return(
        <div key={index} id='right-sound-controls'>
          <div className='player-icons tooltip' tooltip-txt={item.txt}> <Comp size={"16"} /> </div>
          <div key={index} id='controls-bar-sound' className='controls-bar' /> {/* 아이거어떡하지 */}
        </div>
      )
    }
  });

  return (
    <div id='music-player'>
      <div id='nowplaying'>
        {/* <img id='nowplaying-album-img' src={album1} />
        <div id='nowplaying-album'>
          <h3 id='nowplaying-album-title'> MEMORY </h3>
          <p id='nowplaying-album-singer'> 이세계 아이돌 </p>
        </div>
        <ToggleShow size={"16"} /> */}
      </div>
      <div id='playing-selection'>
        <div id='player-controls'>
          {player_controls}
        </div>
        <div id='player-bar'>
          <p className='player-bar-time'> -:-- </p>
          <div className='controls-bar'></div>
          <p className='player-bar-time'> -:-- </p>
        </div>
      </div>
      <div id='right-controls'>
        {right_controls}
      </div>
    </div>
  )
}

export default MusicPlayer