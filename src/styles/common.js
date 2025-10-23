import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 64px minmax(0, 1fr) 88px;
`;

const Content = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: #121212;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`margin: 0;`;
const Txt = styled.p`margin:0;`;
const BoldText = styled.div`margin: 0; font-weight: bold;`
const UnderlineText = styled.p`margin: 0; text-decoration: underline;`;

export { Wrapper, Content, Flex, Icon, Title, Txt, BoldText, UnderlineText }



// ThemeProvider라는 것을 사용하면 색상, 여백, 폰트 같은걸 변수화 하여 일관성 있게 유지할 수 있고, 수정 사항이 생겼을때도 쉽게 수정할 수 있습니다.