import { Flex, Txt } from '../../styles/common.js';
import { Clock, Expand } from '../../assets/icons.jsx';
import { album1, album2 } from '../../assets/album/index.jsx';

const Music = () => {
  const MusicList = ({ number, img, title, singer, album, date, time }) => {
    return (
      <div className='playlist-music-list'>
        <Flex className='playlist-music-list-music'>
          <Txt className='playlist-music-list-number'> {number} </Txt>
          <Flex className='playlist-music-list-title-container'>
            <img className='playlist-music-list-img' src={img} />
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
        <MusicList number={"1"} img={album1} title={"MEMORY"} singer={"이세계 아이돌"} album={"Stargazer"} date={"3주 전"} time={"4:31"} />
        <MusicList number={"2"} img={album2} title={"RE:WIND"} singer={"이세계 아이돌"} album={"RE:WIND"} date={"3주 전"} time={"4:31"} />
      </div>
    </div>
  )
};

export default Music;