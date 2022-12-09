import './App.css';
import { Main } from './pages/Main';
import { Hot } from './pages/Hot';
import { Regular } from './pages/Regular';
import Navbar from './logic/Navbar'
import { Route, Routes } from "react-router-dom"
import { AddMemeScreen } from './pages/AddMemeScreen';

function App() {

  let memesArray = require('./memes.json')
  let test = () => {
    memesArray = [...memesArray, { title: "Hello", upvotes: 1, downvotes: 1 }]
    console.log(memesArray)

  }


  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Main memesArray={memesArray} test={test} />} />
          <Route path="/addmeme" element={<AddMemeScreen memesArray={memesArray} />} />
          <Route path="/hot" element={<Hot memesArray={memesArray} />} />
          <Route path="/regular" element={<Regular memesArray={memesArray} />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
