import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home'

const App = () => {
  return (
    <div>
      < BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App