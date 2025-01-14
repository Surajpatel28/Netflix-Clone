import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import VideoPlayer from './Components/VideoPlayer'
import EmailForm from './Components/EmailForm'
import Trending from './Components/Trending'
import OnlyOnNetflix from './Components/OnlyOnNetflix'
import ReasonCard from './Components/reasonCard'

function App() {

  return (
    <>
      <Navbar />
      <VideoPlayer />
      <EmailForm />
      <h2>Trending Now</h2>
      <Trending/>
      <h2 id='onlyOnNetflix'>Only on Netflix</h2>
      <OnlyOnNetflix/>
      <div style={{marginTop:"65px",}}>
      <h2>More reasons to join</h2>
      </div>
      <ReasonCard/>
    </>
  )
}

export default App
