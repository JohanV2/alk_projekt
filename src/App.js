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

  let BTN = false
  let test = () => {
    memesArray = [...memesArray, { title: "Hello", upvotes: 1, downvotes: 1 }]
    console.log(memesArray)
  }
  const [GODMODE, setGod] = useState(false)

  let godSwitch = () => {
    console.log(`godmode before switch: ${GODMODE}`)
    setGod(!GODMODE)
    console.log(`godmode after switch: ${GODMODE}`)
  }

  return (
    <>
      <TopBar godSwitch={godSwitch} />
      <div class="wrapper">
        <Navbar />
        <div class="content">
          <Routes>
            <Route path="/" element={<Main memesArray={memesArray} test={test} BTN={BTN} GODMODE={GODMODE} />} />
            <Route path="/addmeme" element={<AddMemeScreen memesArray={memesArray} />} />
            <Route path="/hot" element={<Hot memesArray={memesArray} />} />
            <Route path="/regular" element={<Regular memesArray={memesArray} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;
