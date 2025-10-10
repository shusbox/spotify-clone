import { Flex, Title, Txt } from '../../styles/common.js'
import { Container } from '../../styles/premium.js'
import '../../css/premium.css'

const Comparison = () => {
  return (
    <Container id='premium-comparison'>
      <Title> 차이를 경험해 보세요 </Title>
      <Txt className='premium-txt'> Premium을 사용하여 마음껏 음악을 감상하세요. 언제든 해지 가능합니다. </Txt>
    </Container>
  )
}

export default Comparison;