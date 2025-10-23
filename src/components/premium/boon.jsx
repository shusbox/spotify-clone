import { Flex, Title, Txt } from '../../styles/common.js'
import { Container } from '../../styles/premium.js'
import { Check } from '../../assets/icons.jsx'
import '../../css/premium.css'

const Boon = () => {
  const CheckList = ({ txt }) => {
    return (
      <Flex className='premium-boon-list'>
        <Check size={"24"} />
        <Txt> {txt} </Txt>
      </Flex>
    )
  }

  // CheckList 컴포넌트를 Boon 내부에 넣을 경우 렌더링 될때마다 함수가 재생성됩니다. 최적화를 위해 파일 분리 혹은 외부 정의가 좋습니다
  
  return (
    <Container id='premium-boon'>
      <Title> 모든 Premium 요금제에는 아래의 혜택이 포함됩니다 </Title>
      <div>
        <CheckList txt={"수백만 개의 곡 감상"} />
        <CheckList txt={"광고 없이 음악 감상하기"} />
        <CheckList txt={"다운로드하여 오프라인에서 감상"} />
        <CheckList txt={"순서에 상관없이 재생"} />
        <CheckList txt={"뛰어난 음질"} />
        <CheckList txt={"친구와 함께 실시간으로 감상"} />
        <CheckList txt={"재생목록 관리"} />
        <CheckList txt={"K-Pop 리스닝 파티"} />
        {/* 이것도 외부에서 데이터를 받아온다고 가정하고 코드를 짜봅시다 */}
      </div>
    </Container>
  )
}

export default Boon;