import './App.scss';
import { Main } from './pages/Main';
import { Hot } from './pages/Hot';
import { Regular } from './pages/Regular';
import Navbar, { TopBar } from './logic/Navbar'
import { Route, Routes } from "react-router-dom"
import { AddMemeScreen } from './pages/AddMemeScreen';
import { useState } from 'react';
export const userName = "myUser"

function App() {

  let memesArray = require('./memes.json')

  const [GODMODE, setGod] = useState(false)

  let godSwitch = () => {
    setGod(!GODMODE)
  }

  const [memes, setMemes] = useState(memesArray)

  const onVote = (meme) => {
    setMemes(memes.map(memeItem => {
      if (meme.id === memeItem.id) {
        return meme
      }
      return memeItem
    }))
  }

  return (
    <>
      <TopBar godSwitch={godSwitch} GODMODE={GODMODE} />
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/alk_projekt" element={<Main memes={memes} setMemes={setMemes} onVote={onVote} GODMODE={GODMODE} />} />
            <Route path="/alk_projekt/addmeme" element={<AddMemeScreen memes={memes} setMemes={setMemes} />} />
            <Route path="/alk_projekt/hot" element={<Hot memes={memes} setMemes={setMemes} onVote={onVote} GODMODE={GODMODE} />} />
            <Route path="/alk_projekt/regular" element={<Regular memes={memes} setMemes={setMemes} onVote={onVote} GODMODE={GODMODE} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
