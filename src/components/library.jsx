import { Link } from "react-router-dom";
import styled from "styled-components";
import { Start, Add, Hide, FullSize, Search, Inventory } from '../assets/icons'
import { album1 } from '../assets/album/index.jsx'
import '../css/library.css'
import { Flex } from '../styles/common.js'

const Icon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Library() {
  function Playlist({ title, des }) {
    return (
      <Flex className='library-playlist'>
        <Flex className='library-playlist-img-hover'> <Start size={"20"} /> </Flex>
        <img className='library-playlist-img' src={album1} />
        <div>
          <h3 className='library-playlist-title'> {title} </h3>
          <p className='library-playlist-des'> {des} </p>
        </div>
      </Flex>
    )
  }
  // PlayList를 외부 선언 혹은 파일 분리합시다

  return (
    <div id='library'>
      <Flex id='library-header'>
        <Flex id='library-title'>
          <Flex id='library-title-txt-container'>
            <div id='library-title-txt-icons'> {/* id는 DOM상에서 교유해야합니다 */}
              <Hide size={"16"} />
            </div>
            <h2 id='library-title-txt'> 내 라이브러리 </h2>
          </Flex>
          <Flex id='library-create-container'>
            <Flex id='library-create'>
              <Add size={"16"} />
              <p id='library-create-txt'> 만들기 </p>
            </Flex>
            <div id='library-fullscreen'> <FullSize size={"16"} /> </div> {/* 이거 툴팁 올라오게 해야되는데ㅠㅠ */}
            {/* data-tooltip을 사용하거나 react-tooltip 라이브러리를 활용해보세요 */}
          </Flex>
        </Flex>
        <div id='library-filter'>
          <p className='library-filter-select'> 플레이리스트 </p>
        </div>
        <Flex id='library-search'>
          <Icon id='library-search-icon'> <Search size={"16"} /> </Icon>
          <Flex id='library-search-menu'>
            <p id='library-search-menu-txt'> 최근 </p>
            <Inventory size={"16"} />
          </Flex>
        </Flex>
      </Flex>
      <Flex id='library-container'>
        <Link to='/playlist'> <Playlist title={"내 플레이리스트"} des={"플레이리스트 • 진수화"} /> </Link>
      </Flex>
    </div>
  )
}

export default Library