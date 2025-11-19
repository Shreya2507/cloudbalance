import React from 'react'
import { GoPeople } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <div className=' p-7 py-3 bg-white flex justify-between items-center shadow-lg shadow-[#a5a4a482]'>
      <div className='w-[17%] h-full flex justify-between items-center'>
        <img src="/logo.svg" alt="logo" />
        <div>-</div>
        <div>Module</div>
      </div>
      <div className=' h-full flex justify-between gap-4 items-center'>
        <div className=' w-48 h-full flex justify-start gap-2 items-center border-r border-gray-200 '>
            <div className='w-8 h-full p-1 flex justify-center items-center border border-blue-800 bg-blue-100 shadow-md shadow-blue-300 rounded-full'><GoPeople className="text-blue-800 h-full w-full" /></div>
            <div className='flex flex-col justify-center items-start'>
                <div className='text-gray-500 text-sm leading-4 '>Welcome,</div>
                <div className='flex justify-between items-center gap-1'>
                    <div className=' text-blue-800 font-bold leading-2'>Shreya Mathur</div>
                    <IoMdInformationCircleOutline className="text-blue-800 h-5 w-5"  />
                </div>
            </div>
        </div>
        <button className='flex justify-center gap-3 items-center h-full w-28 px-1 py-2 rounded-md border-2 border-blue-800 font-bold text-blue-800'>
            <FiLogOut className='text-blue-800 w-5 h-5' />
            <div>Logout</div>
        </button>

      </div>
      
    </div>
  )
}

export default Header
