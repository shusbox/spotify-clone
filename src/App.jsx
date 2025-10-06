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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
