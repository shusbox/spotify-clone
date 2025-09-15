import { Shuffle, Loop, Pause, Play, Previous, NowPlaying, Lyrics, Playlist, Sound, PIP, FullScreen, Connect } from '../assets/icons.jsx'
import '../css/musicPlayer.css'

function MusicPlayer() {
  return (
    <div id='music-player'>
      <div></div>
      <div id='playing-selection'>
        <div id='player-controls'>
          <div className='player-icons'> <Shuffle size={"16"} /> </div>
          <div className='player-icons'> <Play size={"16"} /> </div>
          <div id='player-icons-pause' className='player-icons music-player-icons'> <Pause size={"16"} /> </div>
          <div className='player-icons'> <Previous size={"16"} /> </div>
          <div className='player-icons'> <Loop size={"16"} /> </div>
        </div>
        <div id='player-bar'>
          <p className='player-bar-time'> -:-- </p>
          <div className='controls-bar'></div>
          <p className='player-bar-time'> -:-- </p>
        </div>
      </div>
      <div id='right-controls'>
        <div className='player-icons'> <NowPlaying size={"16"} /> </div>
        <div className='player-icons'> <Lyrics size={"16"} /> </div>
        <div className='player-icons'> <Playlist size={"16"} /> </div>
        <div className='player-icons'> <Connect size={"16"} /> </div>
        <div id='right-sound-controls'>
          <div className='player-icons'> <Sound size={"16"} /> </div>
          <div id='controls-bar-sound' className='controls-bar' /> {/* 아이거어떡하지 */}
        </div>
        <div className='player-icons'> <PIP size={"16"} /> </div>
        <div className='player-icons'> <FullScreen size={"16"} /> </div>
      </div>
    </div>
  )
}

export default MusicPlayer