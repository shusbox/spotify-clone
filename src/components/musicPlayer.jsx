import { Shuffle, Loop, Pause, Play, Previous } from '../assets/icons.jsx'
import '../css/musicPlayer.css'

function MusicPlayer() {
  return (
    <div id='music-player'>
      <div id='playing-selection'>
        <div id='player-controls'>
          <div className='player-icons'> <Shuffle size={"16"} /> </div>
          <div className='player-icons'> <Play size={"16"} /> </div>
          <div id='player-icons-pause' className='player-icons music-player-icons'> <Pause size={"16"} /> </div>
          <div className='player-icons'> <Previous size={"16"} /> </div>
          <div className='player-icons'> <Loop size={"16"} /> </div>
        </div>
        <div id='player-bar'>
          <p> -:-- </p>
          <div id='player-bar-status'></div>
          <p> -:-- </p>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer