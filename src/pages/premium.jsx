import { Wrapper, Content } from '../styles/common.js';
import Header from '../components/header.jsx';
import Library from '../components/library.jsx';
import MusicPlayer from '../components/musicPlayer.jsx';
import PremiumHeader from '../components/premium/title.jsx';
import PremiumPlan from '../components/premium/plan.jsx';
import PremiumBoon from '../components/premium/boon.jsx';
import PremiumPromotions from '../components/premium/promotions.jsx';
import PremiumComparison from '../components/premium/comparison.jsx'
import '../css/main.css';
import '../css/premium.css';

const Premium = () => {
  const PremiumContent = () => {
    return (
      <Content id='premium-content'>
        <PremiumHeader />
        <PremiumPlan />
        <PremiumBoon />
        <PremiumPromotions />
        <PremiumComparison />
      </Content>
    )
  }

  return (
    <Wrapper>
      <Header />
      <main>
        <Library />
        <div className='main-line' />
        <PremiumContent />
      </main>
      <MusicPlayer />
    </Wrapper>
  )
}

export default Premium