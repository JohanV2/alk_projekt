import './App.css';
import { Mem } from './Mem'
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom"

function App() {
  // const memes_array = require('./memes.json')//test
  // console.log(memes_array)//test

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Mem />} />
          <Route path="/hot" element={<Mem />} />
          <Route path="/regular" element={<Mem />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
