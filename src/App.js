import './App.css';
import { Main } from './Main';
import { Hot } from './Hot'
import { Regular } from './Regular';
import Navbar from './Navbar'
import { Route, Routes } from "react-router-dom"
import { AddMeme } from './AddMeme';
import { useState } from 'react';
import { AddMemeScreen } from './AddMemeScreen';

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
