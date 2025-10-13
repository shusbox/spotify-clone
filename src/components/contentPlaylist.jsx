import { Content, Flex, Title, Txt } from '../styles/common.js';
import { Playlist, Close } from '../assets/icons.jsx'
import '../css/contentPlaylist.css'

const ContentPlaylist = () => {
  return (
    <Content id='playlist-content'>
      <Flex id='playlist-content-title'>
        <Txt> 재생목록 </Txt>
        <Close size={"16"} />
      </Flex>
      <Flex id='playlist-content-subtitle'>
        <Playlist size={"48"} />
        <Title> 재생 목록에 추가하기 </Title>
        <Txt> 여기에서 보려면 트랙의 메뉴에서 '재생목록에 추가'를 누르세요. </Txt>
        <button> 재생할 음악 찾기 </button>
      </Flex>
    </Content>
  )
}

export default ContentPlaylist;