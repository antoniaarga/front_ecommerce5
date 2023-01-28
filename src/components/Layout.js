import React from 'react'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'
import "../App.css"
import { Outlet } from 'react-router-dom'

const Layout = (props) => {
  return (
    <div className='contenedor'>
    <NavBar />
<main>
<Outlet />
</main>

    <Footer />
    
    </div>
  )
}

export default Layout