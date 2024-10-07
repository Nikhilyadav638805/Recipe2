import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import ViewRecipe from './pages/ViewRecipe'
import Login from './pages/Login'
import ViewMore from './pages/ViewMore'
import Contact from './pages/Contact'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <div className=' fixed z-20 w-[100vw] '>
     <Nav/>
       </div>
      <Routes>
        <Route path='/' element =  {<Home/>} />
        <Route path='/about' element =  {<About/>} />
        <Route path='/view' element = {<ViewRecipe/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/viewmore' element = {<ViewMore/>} />
        <Route path='/contact' element = {<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
