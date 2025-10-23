import { Flex, Title, Txt, Icon } from '../../styles/common.js';
import { Start, Download, Invite, More, Inventory } from '../../assets/icons.jsx'

const List = () => {
  return (
    <div id='playlist-list'>
      <Flex id='playlist-list-option-container'>
        <Flex id='playlist-list-option'>
          <Icon id='playlist-list-option-start'> <Start size={"20"} /> </Icon>
          <div id='playlist-list-option-preview'>
            <Icon id='playlist-list-option-preview-spoiler'> <Start size={"12"} /> </Icon>
            <img id='playlist-list-option-preview-img' src='../../../public/img/preview.png' />
          </div>
          <div className='playlist-list-option-preview-icon'> <Download size={"32"} /> </div>
          <div className='playlist-list-option-preview-icon'> <Invite size={"32"} /> </div>
          <div className='playlist-list-option-preview-icon'> <More size={"32"} /> </div>
          {/* 중복되는 코드들을 컴포넌트로 분리하는게 좋을 것 같아요 */}
        </Flex>
        <Flex id='playlist-list-inventory'>
          <Txt id='playlist-list-inventory-txt'> 목록 </Txt>
          <Inventory size={"16"} />
        </Flex>
      </Flex>
    </div>
  )
};

export default List;