import styled from "styled-components";
import { Content, Flex, Title, Txt } from '../styles/common.js'
import '../css/premium.css'

const PremiumContainer = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

function PremiumContent() {
  return (
    <Content id='premium-content'>
      <PremiumContainer id='premium-title'>
        <Flex id='premium-title-txt-container'>
          <Title> 제한 없이 감상하세요. ₩0에 2개월 동안 Premium 개인 요금제를 이용해 보세요. </Title>
          <Txt className='premium-txt'> 이후에는 ₩10,900(부가세 별도)/월이 부과됩니다. 언제든 해지 가능합니다. </Txt>
        </Flex>
        <Flex id='premium-title-btn-container'>
          <button className='premium-title-btn'> 2개월 무료 체험 </button>
          <button id='premium-title-btn-second' className='premium-title-btn'> 모든 요금제 보기 </button>
        </Flex>
        <div id='premium-title-des-container'>
          <p className='premium-title-des'> Premium 개인에만 적용됩니다. 2개월 동안 무료이며 이후 매월 ₩10,900(부가세 별도)이 부과됩니다. Premium 구독 이력이 없는 사용자만 혜택을 이용할 수 있습니다. <span id='premium-title-des-link'>약관이 적용됩니다.</span> </p>
          <p className='premium-title-des'> 이 프로모션은 2025년 10월 24일에 종료됩니다. </p>
        </div>
      </PremiumContainer>
      <PremiumContainer id='premium-plan'>
        <Flex id='premium-plan-txt-container'>
          <Title> 어떤 상황에도 합리적인 요금제 </Title>
          <Txt className='premium-txt'> Premium 요금제를 선택하고 휴대폰, 스피커 및 기타 기기에서 제한 없이 광고 없는 음악을 들으세요. 다양한 방법으로 요금을 결제하세요. 언제든 해지 가능합니다. </Txt>
        </Flex>
        <Flex id='premium-plan-container'>
          <Flex id='premium-plan-card-container'>
            <div className='premium-plan-card'> <img src='https://paymentsdk.spotifycdn.com/svg/cards/visa.svg' /> </div>
            <div className='premium-plan-card'> <img src='https://paymentsdk.spotifycdn.com/svg/cards/mastercard.svg' /> </div>
            <div className='premium-plan-card'> <img src='https://paymentsdk.spotifycdn.com/svg/cards/amex.svg' /> </div>
            <div className='premium-plan-card'> <img src='https://paymentsdk.spotifycdn.com/svg/cards/jcb.svg' /> </div>
          </Flex>
          <Txt id='premium-card-more'> 이외 6개 이상 </Txt>
        </Flex>
      </PremiumContainer>
    </Content>
  )
}

export default PremiumContent