import { Link } from "react-router-dom";
import styled from "styled-components";
import { Spotify, Home, Search, Tippy, Download, Notification, Social } from '../assets/icons.jsx'
import '../css/header.css'

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #b3b3b3;
`;
// 중복된 Icon 정의는 `styles/common.js`의 Icon으로 통일하면 어떨까요?

function Header() {
  return (
    <header>
      <Link to='/'> <Icon id='header-logo'> <Spotify size={"32"} /> </Icon> </Link>
      <div id='header-search'>
        <Link to='/'> <Icon id='search-home-icons'> <Home size={"24"} /> {/* 이거 홈버튼 홈 아닐때 모양바뀜 */} </Icon> </Link>
        <div id='header-search-input'>
          <input id='search-input' placeholder='어떤 콘텐츠를 감상하고 싶으세요?' />
          <Icon id='search-icons-search'> <Search size={"24"} /> </Icon>
          <div id='search-kbd'>
            <kbd className='search-kbd-txt'> ⌘ </kbd> {/* 이거 커맨드키가조금작음 */}
            <kbd className='search-kbd-txt'> K </kbd>
          </div>
          <div id='search-line' />
          <Icon id='search-icons-tippy'> <Tippy size={"24"} /> </Icon>
        </div>
      </div>
      <div id='menu'>
        <Link to='/premium'> <button id='premium'> Premium 둘러보기 </button> </Link>
        <div id='download'>
          <Download size={"16px"} />
          <p> 앱 설치하기 </p>
        </div>
        {/* size에는 "16px" 대신 숫자로 전달하는게 더 좋을거같아요 */}
        <nav>
          <div id='nav-icons'>
            <Icon id='nav-notification'> <Notification size={"16px"} /> </Icon>
            <Icon id='nav-social'> <Social size={"16px"} /> </Icon>
          </div>
          <Icon id='profile'> <img id='profile-img' src='../../public/img/profile.jpg' /> </Icon>
        </nav>
      </div>
    </header>
  )
}

export default Header