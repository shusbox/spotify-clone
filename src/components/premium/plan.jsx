import { Flex, Title, Txt } from '../../styles/common.js'
import { PremiumContainer } from '../../styles/premium.js'
import '../../css/premium.css'

const Plan = () => {
  const Card = ({ link }) => {
    return <div className='premium-plan-card'> <img className='premium-plan-card-img' src={link} /> </div>;
  }

  return (
    <PremiumContainer id='premium-plan'>
      <Flex id='premium-plan-txt-container'>
        <Title> 어떤 상황에도 합리적인 요금제 </Title>
        <Txt className='premium-txt'> Premium 요금제를 선택하고 휴대폰, 스피커 및 기타 기기에서 제한 없이 광고 없는 음악을 들으세요. 다양한 방법으로 요금을 결제하세요. 언제든 해지 가능합니다. </Txt>
      </Flex>
      <Flex id='premium-plan-container'>
        <Flex id='premium-plan-card-container'>
          <Card link={'https://paymentsdk.spotifycdn.com/svg/cards/visa.svg'} />
          <Card link={'https://paymentsdk.spotifycdn.com/svg/cards/mastercard.svg'} />
          <Card link={'https://paymentsdk.spotifycdn.com/svg/cards/amex.svg'} />
          <Card link={'https://paymentsdk.spotifycdn.com/svg/cards/jcb.svg'} />
        </Flex>
        <Txt id='premium-plan-card-more-txt'> 이외 6개 이상 </Txt>
        <div id='premium-plan-card-more'>
          <Card link={'https://paymentsdk.spotifycdn.com/svg/cards/cup.svg'} />
          <Card link={'https://paymentsdk.spotifycdn.com/svg/carriers/uplus.svg'} />
          <Card link={'https://paymentsdk.spotifycdn.com/svg/carriers/kt.svg'} />
          <Card link={'https://paymentsdk.spotifycdn.com/svg/carriers/sktelecom.svg'} />
          <Card link={'https://paymentsdk.spotifycdn.com/svg/providers/kakaopay.svg'} />
          <Card link={'https://paymentsdk.spotifycdn.com/svg/providers/toss-pay.svg'} />
        </div>
      </Flex>
    </PremiumContainer>
  )
}

export default Plan;