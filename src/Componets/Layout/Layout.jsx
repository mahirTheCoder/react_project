import React from 'react'
import { Outlet } from 'react-router'
import Come from '../common/Come'

const Layout = () => {
  return (
    <>
    <Come/>         
    <Outlet/>
    </>


  )
}

export default Layout