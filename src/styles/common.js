import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 64px minmax(0, 1fr) 88px;
`

const Content = styled.div`
  flex: 1;
  position: relative;
  border-radius: 8px;
  background-color: #121212;
  overflow-x: hidden;
  overflow-y: scroll;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`margin: 0;`;
const Txt = styled.p`margin:0;`;

export { Wrapper, Content, Flex, Title, Txt }