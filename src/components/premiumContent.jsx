import { Content, Flex } from '../styles/common.js'
import '../css/premium.css'

function PremiumContent() {
  return (
    <Content>
      <Flex id='premium-title'>
        <Flex id='premium-title-txt-container'>
          <h1 id='premium-title-txt'> 제한 없이 감상하세요. ₩0에 2개월 동안 Premium 개인 요금제를 이용해 보세요. </h1>
          <p id='premium-title-txt-des'> 이후에는 ₩10,900(부가세 별도)/월이 부과됩니다. 언제든 해지 가능합니다. </p>
        </Flex>
        <Flex id='premium-title-btn-container'>
          <button className='premium-title-btn'> 2개월 무료 체험 </button>
          <button id='premium-title-btn-second' className='premium-title-btn'> 모든 요금제 보기 </button>
        </Flex>
        <div id='premium-title-des-container'>
          <p className='premium-title-des'> Premium 개인에만 적용됩니다. 2개월 동안 무료이며 이후 매월 ₩10,900(부가세 별도)이 부과됩니다. Premium 구독 이력이 없는 사용자만 혜택을 이용할 수 있습니다. <span id='premium-title-des-link'>약관이 적용됩니다.</span> </p>
          <p className='premium-title-des'> 이 프로모션은 2025년 10월 24일에 종료됩니다. </p>
        </div>
      </Flex>
    </Content>
  )
}

export default PremiumContent