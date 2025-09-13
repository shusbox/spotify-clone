import { Spotify, Home, Search, Tippy } from '../assets/icons.jsx'
import '../css/header.css'

function Header() {
  return (
    <header>
      <div>
        <Spotify size={"32"} />
      </div>
      <div id='header-search'>
        <div id='search-home-icons'>
          <Home size={"24"} /> {/* 이거 홈버튼 홈 아닐때 모양바뀜 */}
        </div>
        <div id='header-search-input'>
          <div id='search-icons-search' className='search-icons'>
            <Search size={"24"} />
          </div>
          <input id='search-input' placeholder='어떤 콘텐츠를 감상하고 싶으세요?' />
          <div id='search-line' />
          <div id='search-icons-tippy' className='search-icons'>
            <Tippy size={"24"} />
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </header>
  )
}

export default Header