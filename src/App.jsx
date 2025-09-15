import { useState } from 'react'
import Header from './components/header.jsx'
import Index from './pages/index.jsx'
import MusicPlayer from './components/musicPlayer.jsx'
import './css/app.css'

function App() {
  return (
    <main>
      <Header />
      <Index />
      <MusicPlayer />
    </main>
  )
}

export default App
