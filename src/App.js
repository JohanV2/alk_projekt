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
      <div class="wrapper">
        <Navbar />
        <div class="content">
          <Routes>
            <Route path="/" element={<Main memesArray={memesArray} GODMODE={GODMODE} />} />
            <Route path="/addmeme" element={<AddMemeScreen memesArray={memesArray} />} />
            <Route path="/hot" element={<Hot memesArray={memesArray} GODMODE={GODMODE} />} />
            <Route path="/regular" element={<Regular memesArray={memesArray} GODMODE={GODMODE} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
