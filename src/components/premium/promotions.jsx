import styled from "styled-components";
import { Title, Txt, UnderlineText } from '../../styles/common.js';
import { Container, BoldText, FooterText } from '../../styles/premium.js';
import { Spotify } from '../../assets/icons.jsx';
import '../../css/premium.css';

const PremiumPromotionFlex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`

const PremiumPromotionsLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #3a3a3a;
`

const Promotions = () => {
  const Card = ({ color, boon, range, price, subprice, description1, description2, description3, start, footer, finish}) => {
    return (
      <PremiumPromotionFlex id={color} className='premium-promotions-card'>
        <div className='premium-promotions-card-boon'> {boon} </div>
        <PremiumPromotionFlex className='premium-promotions-card-title'>
          <div className='premium-promotions-card-spotify'>
            <Spotify size={"24"} />
            <BoldText> Premium </BoldText>
          </div>
          <Title className='premium-promotions-card-range'> {range} </Title>
          <div>
            <BoldText> {price} </BoldText>
            <BoldText className='premium-promotions-card-range-subprice'> {subprice} </BoldText>
          </div>
        </PremiumPromotionFlex>
        <PremiumPromotionsLine />
        <PremiumPromotionFlex className='premium-promotions-card-subtitle'>
          <PremiumPromotionFlex className='premium-promotions-card-description'>
            <ul className='premium-promotions-card-ul'>
              {description1}
              {description2}
              {description3}
            </ul>
            <button id={color} className='premium-promotions-card-startBtn'> {start} </button>
          </PremiumPromotionFlex>
          <FooterText className='premiu-promotions-card-footer'> {footer} <UnderlineText> 약관이 적용됩니다. </UnderlineText> {finish} </FooterText>
        </PremiumPromotionFlex>
      </PremiumPromotionFlex>
    )
  }

  return (
    <Container id='premium-promotions'>
      <Card
        color={"premium-promotions-card-pink"}
        boon={"2개월 동안 무료"}
        range={"개인"}
        price={"2개월 동안 무료"}
        subprice={"체험 기간 종료 후 매월 ₩10,900(부가세 별도) 결제"}
        description1={<li> Premium 계정 1개 </li>}
        description2={<li> 언제든 해지 가능 </li>}
        start={"2개월 무료체험"}
        footer={"2개월 동안 무료이며 이후 매월 ₩10,900(부가세 별도)이 부과됩니다. Premium 구독 이력이 없는 사용자만 혜택을 이용할 수 있습니다."}
        finish={"이 프로모션은 2025년 10월 24일에 종료됩니다."}
      />
      <Card
        color={"premium-promotions-card-yellow"}
        range={"듀오"}
        price={"매월 ₩16,350(부가세 별도)"}
        description1={<li> Premium 별도 계정 2개 </li>}
        description2={<li> 언제든 해지 가능 </li>}
        start={"Premium 듀오 시작하기"}
        footer={"같은 주소지에 거주하는 커플용 요금제입니다."}
      />
      <Card
        color={"premium-promotions-card-green"}
        range={"베이직"}
        price={"매월 ₩7,900(부가세 별도)"}
        description1={<li> Premium 베이직 계정 1개 </li>}
        description2={<li> 다운로드 기능을 사용할 수 없음 </li>}
        description3={<li> 언제든 해지 가능 </li>}
        start={"Premium 베이직 시작하기"}
      /> 
    </Container>
  )
}

export default Promotions