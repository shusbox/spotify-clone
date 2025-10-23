import { Flex, Txt } from '../../styles/common.js';
import { Clock, Expand, Start } from '../../assets/icons.jsx';
import { album1, album2 } from '../../assets/album/index.jsx';

const Music = () => {
  const MusicList = ({ number, img, title, singer, album, date, time }) => {
    return (
      <div className='playlist-music-list'>
        <Flex className='playlist-music-list-music'>
          <Flex className='playlist-music-list-number-container'>
            <Flex className='playlist-music-list-number'> <Txt> {number} </Txt> </Flex>
            <div className='playlist-music-list-start'> <Start size={"16"} /> </div>
          </Flex>
          <Flex className='playlist-music-list-title-container'>
            <img className='playlist-music-list-img' src={img} />
            {/* 이미지에 alt 속성 추가하는게 SEO 측면에서 좋을 것 같아요 */}
            <div className='playlist-music-list-title'>
              <div className='playlist-music-list-title-txt'> <Txt> {title} </Txt> </div>
              <div className='playlist-music-list-title-subtxt'> <Txt> {singer} </Txt> </div>
            </div>
          </Flex>
        </Flex>
        <Txt className="playlist-music-list-txt"> {album} </Txt>
        <Txt className="playlist-music-list-txt"> {date} </Txt>
        <div className='playlist-music-list-time'> <Txt className="playlist-music-list-txt"> {time} </Txt> </div>
      </div>
    )
  }

  // MusicList 컴포넌트를 Music 내부에 넣을 경우 렌더링 될때마다 함수가 재생성됩니다 최적화를 위해 파일 분리 혹은 외부 정의가 좋습니다

  return (
    <div id='playlist-music'>
      <div id='playlist-music-rows-container'>
        <Flex className='playlist-music-rows'>
          <Flex id="playlist-music-title">
            <Txt id='playlist-music-hash'> # </Txt>
            <Txt> 제목 </Txt>
          </Flex>
          <div className='playlist-music-rows-line' />
        </Flex>
        <Flex className='playlist-music-rows'>
          <Txt> 앨범 </Txt>
          <div className='playlist-music-rows-line' />
        </Flex>
        <Flex className='playlist-music-rows'>
          <Txt> 추가한 날짜 </Txt>
          <div className='playlist-music-rows-line' />
        </Flex>
        <Flex id='playlist-music-clock'>
          <Clock size={"16"} />
          <div id='playlist-music-expand'> <Expand size={"16"} /> </div>
        </Flex>
      </div>
      <div id='playlist-music-line' />
      <div id='playlist-music-list-container'>
        <MusicList number={"1"} img={album2} title={"RE:WIND"} singer={"이세계 아이돌"} album={"RE:WIND"} date={"3주 전"} time={"4:31"} />
        <MusicList number={"2"} img={album1} title={"MEMORY"} singer={"이세계 아이돌"} album={"Stargazer"} date={"3주 전"} time={"4:31"} />
        <MusicList number={"3"} img={album1} title={"Stargazers"} singer={"이세계 아이돌"} album={"Stargazers"} date={"3주 전"} time={"3:38"} />
        <MusicList number={"4"} img={album1} title={"ELEVATE"} singer={"이세계 아이돌"} album={"Stargazers"} date={"3주 전"} time={"3:10"} />
        <MusicList number={"5"} img={album1} title={"MEMORY"} singer={"이세계 아이돌"} album={"Stargazers"} date={"3주 전"} time={"3:35"} />
      </div>
      // 지금은 정적인 데이터이지만 데이터를 서버에서 받아온다고 가정하고 코드를 짜면 이후에 백엔드를 연결해야할 때 좋습니다. 데이터를 musicData로 만들고, map을 사용하여 렌더링 해봅시다.
    </div>
  )
};

export default Music;