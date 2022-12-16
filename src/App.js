import './App.scss';
import { Main } from './pages/Main';
import { Hot } from './pages/Hot';
import { Regular } from './pages/Regular';
import Navbar, { TopBar } from './logic/Navbar'
import { Route, Routes } from "react-router-dom"
import { AddMemeScreen } from './pages/AddMemeScreen';
import { useState } from 'react';

function App() {

  let memesArray = require('./memes.json')

  const [GODMODE, setGod] = useState(false)

  const userName = "myUser"

  let godSwitch = () => {

    memesArray.map((meme) => {
      meme.upAble = true
      meme.downAble = true
      return (null)
    }
    )
    setGod(!GODMODE)
  }

  return (
    <>
      <TopBar godSwitch={godSwitch} GODMODE={GODMODE} />
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/alk_projekt" element={<Main memesArray={memesArray} GODMODE={GODMODE} userName={userName} />} />
            <Route path="/alk_projekt/addmeme" element={<AddMemeScreen memesArray={memesArray} userName={userName} />} />
            <Route path="/alk_projekt/hot" element={<Hot memesArray={memesArray} GODMODE={GODMODE} userName={userName} />} />
            <Route path="/alk_projekt/regular" element={<Regular memesArray={memesArray} GODMODE={GODMODE} userName={userName} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
