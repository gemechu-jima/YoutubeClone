import { useState } from 'react'
import Header from './pages/Header'
import SidebarPage from './pages/SidebarPage'
import MainPage from "./pages/MainPage"
import { useGlobalContext } from './context/useContext'
function App() {
  const {iconClick}=useGlobalContext()
 

  return (
      <div className='bg-gray-800  text-white'>
        <Header />
        <div className='flex w-[95%] mx-auto pt-20'>
          <SidebarPage />
          <div className={`${iconClick ? "ml-44":"ml-16"}`}>
          <MainPage/>
          </div>
        </div>
       </div>

  )
}

export default App
