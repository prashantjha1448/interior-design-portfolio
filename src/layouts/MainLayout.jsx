import React from 'react'
import Navbar from "../Components/Navbar"
import {Outlet , useLocation } from "react-router-dom"
import Footer from '../Components/Footer'

const MainLayout = () => {
  const location = useLocation()
  return (
    <div className=''>
      <Navbar/>
      <main className={location.pathname === "/" ? "" : ""}>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout