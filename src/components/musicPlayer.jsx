import { Shuffle, Loop, Pause, Start, Play, Previous, NowPlaying, Lyrics, Playlist, Sound, PIP, FullScreen, Connect } from '../assets/icons.jsx'
import '../css/musicPlayer.css'

function MusicPlayer() {
  return (
    <div id='music-player'>
      <div></div>
      <div id='playing-selection'>
        <div id='player-controls'>
          <div className='player-icons tooltip' tooltip-txt='셔플 활성화하기'> <Shuffle size={"16"} /> </div>
          <div className='player-icons tooltip' tooltip-txt='이전'> <Play size={"16"} /> </div>
          {/* 누르면 시작하고 더ㅏ시 누르면 멈출수있게 멈추면 아이콘이랑 content도 바뀌게 */}
          <div id='player-icons-pause' className='player-icons music-player-icons tooltip' tooltip-txt='재생하기'> <Start size={"16"} /> </div>
          <div className='player-icons tooltip' tooltip-txt='다음'> <Previous size={"16"} /> </div>
          <div className='player-icons tooltip' tooltip-txt='반복 활성화하기'> <Loop size={"16"} /> </div>
        </div>
        <div id='player-bar'>
          <p className='player-bar-time'> -:-- </p>
          <div className='controls-bar'></div>
          <p className='player-bar-time'> -:-- </p>
        </div>
      </div>
      <div id='right-controls'>
        <div className='player-icons tooltip' tooltip-txt='지금 재생 중 보기'> <NowPlaying size={"16"} /> </div>
        <div className='player-icons tooltip' tooltip-txt='가사'> <Lyrics size={"16"} /> </div>
        <div className='player-icons tooltip' tooltip-txt='재생목록'> <Playlist size={"16"} /> </div>
        <div className='player-icons tooltip' tooltip-txt='기기에 연결하기'> <Connect size={"16"} /> </div>
        <div id='right-sound-controls'>
          <div className='player-icons tooltip' tooltip-txt='음소거하기'> <Sound size={"16"} /> </div>
          <div id='controls-bar-sound' className='controls-bar' /> {/* 아이거어떡하지 */}
        </div>
        <div className='player-icons tooltip' tooltip-txt='미니플레이어 열기'> <PIP size={"16"} /> </div>
        <div className='player-icons tooltip' tooltip-txt='전체 화면으로 전환'> <FullScreen size={"16"} /> </div> {/* tooltip 화면 넘을 떄 어떻게 처리할건지 */}
      </div>
    </div>
  )
}

export default MusicPlayer