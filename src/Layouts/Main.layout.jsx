import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function MainLayout() {
  return (
    <div>
      {/* navbar */}
      <Navbar/>
      <Outlet/>
      {/* footer */}
      <Footer/>
    </div>
  )
}
