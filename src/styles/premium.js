import styled from "styled-components";

const Container = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const BoldText = styled.div`
  margin: 0;
  font-weight: bold;
`
// BoldText를 common.js에서 가져와서 사용하면 좋을 것 같아요

const FooterText = styled.div`
  margin: 0;
  font-size: 11px;
`

export { Container, BoldText, FooterText }