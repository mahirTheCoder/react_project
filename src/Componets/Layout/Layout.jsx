import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../ui/Footer'

const Layout = () => {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>


  )
}

export default Layout