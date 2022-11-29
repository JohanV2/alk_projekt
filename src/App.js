import './App.css';
import { Main } from './Main';
import { Hot } from './Hot'
import { Regular } from './Regular';
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom"

function App() {

  const memesArray = require('./memes.json')

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Main memesArray={memesArray} />} />
          <Route path="/hot" element={<Hot memesArray={memesArray} />} />
          <Route path="/regular" element={<Regular memesArray={memesArray} />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
