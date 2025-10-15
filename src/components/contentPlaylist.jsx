import { Content, Flex, Title, Txt } from '../styles/common.js';
import { Playlist, Close } from '../assets/icons.jsx'
import '../css/contentPlaylist.css'

const ContentPlaylist = () => {
  return (
    <Content id='playlist-content'>
      <Flex id='playlist-content-title'>
        <p id='playlist-content-title-txt'> 재생목록 </p>
        <div id='playlist-content-title-icon'> <Close size={"16"} /> </div>
      </Flex>
      <Flex id='playlist-content-subtitle'>
        <Playlist size={"48"} />
        <div>
          <h1 id='playlist-content-subtitle-title'> 재생 목록에 추가하기 </h1>
          <p id='playlist-content-subtitle-txt'> 여기에서 보려면 트랙의 메뉴에서 '재생목록에 추가'를 누르세요. </p>
        </div>
        <button id='playlist-content-btn'> 재생할 음악 찾기 </button>
      </Flex>
    </Content>
  )
}

export default ContentPlaylist;