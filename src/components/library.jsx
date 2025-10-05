import styled from "styled-components";
import { Add, Hide, FullSize, Search, List } from '../assets/icons'
import '../css/library.css'

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Library() {
  return (
    <div id='library'>
      <Flex id='library-header'>
        <Flex id='library-title'>
          <Flex id='library-title-txt-container'>
            <div id='library-title-txt-icons'>
              <Hide size={"16"} />
            </div>
            <h2 id='library-title-txt'> 내 라이브러리 </h2>
          </Flex>
          <Flex id='library-create-container'>
            <Flex id='library-create'>
              <Add size={"16"} />
              <p id='library-create-txt'> 만들기 </p>
            </Flex>
            <div id='library-fullscreen'> <FullSize size={"16"} /> </div>
          </Flex>
        </Flex>
        <div id='library-filter'>
          <p className='library-filter-select'> 플레이리스트 </p>
        </div>
        <Flex id='library-search'>
          <Icon> <Search size={"16"} /> </Icon>
          <Flex id='library-search-menu'>
            <p id='library-search-menu-txt'> 최근 </p>
            <List size={"16"} />
          </Flex>
        </Flex>
      </Flex>
      <Flex id='library-container'></Flex>
    </div>
  )
}

export default Library