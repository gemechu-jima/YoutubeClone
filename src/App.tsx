import { useState } from 'react'
import Header from './pages/Header'
import SidebarPage from './pages/SidebarPage'
import MainPage from "./pages/MainPage"
import { useGlobalContext } from './context/useContext'
function App() {
  const {iconClick}=useGlobalContext()
 

  return (
      <div className='bg-gray-800 h-screen  text-white'>
        <Header />
        <div className='flex w-[95%] mx-auto pt-20'>
          <SidebarPage />
          <div className={`${iconClick ? "ml-48":"ml-16"} mt-10 `}>
          <MainPage/>
          </div>
        </div>
       </div>

  )
}

export default App
