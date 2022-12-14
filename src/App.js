import './App.scss';
import { Main } from './pages/Main';
import { Hot } from './pages/Hot';
import { Regular } from './pages/Regular';
import Navbar, { TopBar } from './logic/Navbar'
import { Route, Routes } from "react-router-dom"
import { AddMemeScreen } from './pages/AddMemeScreen';

function App() {

  let memesArray = require('./memes.json')
  let GODMODE = false
  let BTN = false
  let test = () => {
    memesArray = [...memesArray, { title: "Hello", upvotes: 1, downvotes: 1 }]
    console.log(memesArray)

  }


  return (
    <>
      <TopBar />
      <div class="wrapper">
        <Navbar />
        <div class="content">
          <Routes>
            <Route path="/" element={<Main memesArray={memesArray} test={test} GODMODE={GODMODE} BTN={BTN} />} />
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
