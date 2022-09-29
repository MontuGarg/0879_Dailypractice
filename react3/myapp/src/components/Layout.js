import React from 'react'
import {Link,Outlet} from 'react-router-dom'; 
export default function Layout() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg bg-light'>
            <Link className="navbar-brand" to="/home">Home</Link>
            <Link className="navbar-brand" to="/about">About</Link>
            <Link className="navbar-brand" to="/signup">SignUp</Link>
            <Link className="navbar-brand" to="/login">Login</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
