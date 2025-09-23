import styled from "styled-components";
import { Add, Hide } from '../assets/icons'
import '../css/library.css'

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

function Library() {
  return (
    <div id='library'>
      <Flex id='library-title'>
        <Flex id='library-title-txt-container'>
          <div id='library-title-txt-icons'>
            <Hide size={"16"} />
          </div>
          <h2 id='library-title-txt'> 내 라이브러리 </h2>
        </Flex>
        <div>
          <Flex id='library-create'>
            <Add size={"16"} />
            <p id='library-create-txt'> 만들기 </p>
          </Flex>
          <div id='library-fullscreen'></div>
        </div>
      </Flex>
      <Flex id='library-container'>

      </Flex>
    </div>
  )
}

export default Library