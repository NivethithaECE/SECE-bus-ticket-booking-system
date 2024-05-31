import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-screen h-[10vh] bg-purple-800 text-white flex justify-between items-center px-28 font-medium text-xl'>
        <div className='flex justify-between items-center space-x-5'>
            <div>Booking</div>
            <div><img src='/busbg.png' className='h-12' /></div>
        </div>
        <div className='hidden md:flex h-[100%]'>
            <NavLink to='/home' className={({ isActive })=> isActive? "h-[100%] border-b-4 border-b-white": ""}>
                <div className='hover:bg-purple-700 h-[100%] flex w-24 justify-center items-center cursor-pointer'>HOME</div>
            </NavLink>
            <NavLink to='/' className={({ isActive })=> isActive? "h-[100%] border-b-4 border-b-white": ""}>
                <div className='hover:bg-purple-700 h-[100%] flex w-24 justify-center items-center cursor-pointer'>LOGIN</div>
            </NavLink>
            <NavLink to='/admin' className={({ isActive })=> isActive? "h-[100%] border-b-4 border-b-white": ""}>
                <div className='hover:bg-purple-700 h-[100%] flex w-24 justify-center items-center cursor-pointer'>ADMIN</div>
            </NavLink>
        </div>

    </div>
  )
}
