import React from 'react'
import { SlMenu } from "react-icons/sl";

import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { AiOutlineAudio } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import TopList from '../components/TopList';
import { useGlobalContext } from '../context/useContext';
interface childProps{
    handleClick:()=>void
}
function Header() {
  const {iconClick, handleClick}=useGlobalContext()
  return (
<div className='fixed  z-50 w-full'>
<div className='flex  z-20 gap-2 justify-between w-full py-2 pl-5 bg-gray-800   text-white'>
      <div className='flex items-center gap-4'>
        <span className='text-white font-bold text-2xl cursor-pointer' onClick={handleClick} ><SlMenu/></span>
        <h1 className='font'>Youtube</h1>
      </div>
      <div className='sm:flex items-center gap-5 xl:w-[40rem] md:w-[35rem] sm:w-[30rem] hidden'>
        <div className='flex items-center w-full border-solid border-2 border-gray-500 rounded-3xl' >
        <input placeholder='search' type='search' className='px-4 py-2 rounded-s-3xl 
        outline-2 outline-sky-500 bg-transparent border-3 border-gray-200 w-[85%]'/>
        <button className='py-3 px-2 rounded-e-3xl bg-slate-700 w-[15%] flex items-center justify-center '><CiSearch/></button>
        </div>
       <span className=' p-3  rounded-full bg-slate-700'><AiOutlineAudio/></span>
      </div>
      <div className='flex'>
       <span className='font-bold text-2xl p-2 m-1'><BiVideoPlus/></span>
        <span className='font-bold text-2xl p-2 m-1'><IoIosNotifications/></span>
       <span className='font-bold text-2xl p-2 m-1'><MdAccountCircle/></span> 
      </div>
    </div>
    <TopList/>
    </div>
    
  )
}

export default Header