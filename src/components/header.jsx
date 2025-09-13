import { Spotify, Home, Search, Tippy, Download, Notification, Social } from '../assets/icons.jsx'
import '../css/header.css'

function Header() {
  return (
    <header>
      <div id='header-logo' className='header-icons'>
        <Spotify size={"32"} />
      </div>
      <div id='header-search'>
        <div id='search-home-icons'>
          <Home size={"24"} /> {/* 이거 홈버튼 홈 아닐때 모양바뀜 */}
        </div>
        <div id='header-search-input'>
          <div id='search-icons-search' className='header-icons'>
            <Search size={"24"} />
          </div>
          <input id='search-input' placeholder='어떤 콘텐츠를 감상하고 싶으세요?' />
          <div id='search-line' />
          <div id='search-icons-tippy' className='header-icons'>
            <Tippy size={"24"} />
          </div>
        </div>
      </div>
      <div id='menu'>
        <div id='premium'>
          <p id='premium-txt'> Premium 둘러보기 </p>
        </div>
        <div id='download'>
          <Download size={"16px"} />
          <p> 앱 설치하기 </p>
        </div>
        <nav>
          <div id='nav-icons'>
            <div id='nav-notification' className='header-icons'>
              <Notification size={"16px"} />
            </div>
            <div id='nav-social' className='header-icons'>
              <Social size={"16px"} />
            </div>
          </div>
          <div id='profile' className='header-icons'>
            <img id='profile-img' src='../../public/img/profile.jpg' />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header