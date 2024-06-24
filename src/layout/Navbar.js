import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <ul>
            <Link to="/" style={{textDecoration:'none'}}><li>EMS</li></Link>
        </ul>
        <ul>
            <Link to="/adduser"> <button className='btn'>AddUser</button></Link>
        </ul>
    </nav>
    </>
  )
}