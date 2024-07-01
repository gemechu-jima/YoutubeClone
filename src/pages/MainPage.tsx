import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Shorts from '../components/Shorts'
import Subscription from '../components/Subscription'
import You from '../components/You'
function MainPage() {
  return (
    <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/shorts' element={<Shorts/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="/you" element={<You/>}/>
    </Routes>
  )
}

export default MainPage