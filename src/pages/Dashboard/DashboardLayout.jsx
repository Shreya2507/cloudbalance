import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const DashboardLayout = () => {
  return (
    <div className='w-screen'>
      <Header />
      <div className='w-5/6 h-full bg-gray-300'>
        Dashboard
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout
