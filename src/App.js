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

  return (
    <>
      <TopBar godSwitch={godSwitch} GODMODE={GODMODE} />
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/alk_projekt" element={<Main memes={memes} setMemes={setMemes} GODMODE={GODMODE} userName={userName} />} />
            <Route path="/alk_projekt/addmeme" element={<AddMemeScreen memes={memes} setMemes={setMemes} userName={userName} />} />
            <Route path="/alk_projekt/hot" element={<Hot memes={memes} setMemes={setMemes} GODMODE={GODMODE} userName={userName} />} />
            <Route path="/alk_projekt/regular" element={<Regular memes={memes} setMemes={setMemes} GODMODE={GODMODE} userName={userName} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
