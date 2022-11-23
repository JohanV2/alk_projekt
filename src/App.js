import './App.css';
import { Hot } from './Hot'
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Hot />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/regular" element={<Hot />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
