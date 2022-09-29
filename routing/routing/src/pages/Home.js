import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/form">Login</Link>
      {/* <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link> */}
      
    </nav>
    </>
  )
}
