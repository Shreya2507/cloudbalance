import React from 'react'
import { Link } from 'react-router-dom'

const LoginFooter = () => {
  return (
    <footer className='bg-gray-100 py-5 px-8 text-sm absolute bottom-0 left-0 right-0 flex justify-between items-center'>
        <div>Have Questions ? <Link className=' text-[#4398d7] font-bold'>Talk to our team</Link></div>
        <div className=' text-gray-500'>CloudKeeper 2025 | All Rights Reserved</div>
    </footer>
  )
}

export default LoginFooter
