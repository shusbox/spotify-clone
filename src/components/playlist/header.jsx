import { Flex, Title, Txt, BoldText } from '../../styles/common.js';
import { album2 } from '../../assets/album/index.jsx';
import '../../css/playlist.css';

const Header = () => {
  return (
    <Flex id='playlist-header'>
      <img id='playlist-header-img' src={album2} />
      <div>
        <Txt id='playlist-header-subtitle'> 비공개 플레이리스트 </Txt>
        <Title id='playlist-header-title'> 내 플레이리스트 </Title>
        <Flex id='playlist-header-description'>
          <BoldText id='playlist-header-description-username'> 진수화 </BoldText>
          <Txt> • </Txt>
          <Txt> 2곡, 8분 33초 </Txt>
        </Flex>
      </div>
    </Flex>
  )
}

export default Header;