import React from 'react'
import Links from '../components/Links'
import { useGlobalContext } from '../context/useContext'

export default function SidebarPage() {
  const {iconClick}=useGlobalContext()
   
  return (
    <div className={`fixed top-14 left-0 p-2 h-screen ${iconClick ? "w-56" :"40"}`}>
        <Links />
    </div>
  )
}
