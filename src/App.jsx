import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/index.jsx'
import Premium from './pages/premium.jsx'
import Playlist from './pages/playlist.jsx'
import './css/app.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/playlist' element={<Playlist />} />
          {/* 404 라우트 추가하여 존재하지 않는 페이지를 처리하면 좋을 것 같아요 ex) <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}