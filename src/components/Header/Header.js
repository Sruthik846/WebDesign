import React from 'react'
import './Header.css'
import {BrowserRouter,Link} from 'react-router-dom'

function Header() {
  return (
    <div >
        <div className='AM'>
            AM.
        </div>
        <div className='menus '>
        <BrowserRouter className='not_activeMenus '>
            <Link className='active'>Home</Link> 
            <Link className='menu' >About us</Link> 
            <Link className='menu'>Resumes</Link> 
            <Link className='menu'>Services</Link>
            <Link className='menu'>Resumes</Link>  
            <Link className='menu'>Portfolio</Link> 
            <Link className='menu'>Pricing</Link>
            <Link className='menu'>Contact</Link>
            </BrowserRouter>
        </div>
      
    </div>
  )
}

export default Header

