import './App.css';
import { Hot } from './Hot'
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom"

function App() {

  const memesArray = require('./memes.json')

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Hot memesArray={memesArray} />} />
          <Route path="/hot" element={<Hot memesArray={memesArray} />} />
          <Route path="/regular" element={<Hot memesArray={memesArray} />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
