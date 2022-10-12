import React from 'react';
import logo from './logo.svg';
import {Link,Outlet} from 'react-router-dom'; 
export default function Layout() {
  // function Myapp(){
  //   document.getElementById("link").style.display="inline";
  //   document.getElementById("link1").style.display="inline";
  //   document.getElementById("link2").style.display="inline";
  //   document.getElementById("link3").style.display="inline";
  //   document.getElementById("img").style.width="150px";
  //   document.getElementById("img").style.float="left";
  //   document.getElementById("img").style.left="25%";
  //   document.getElementById("nav").style.marginLeft="-13%";
  //   document.getElementById("home").style.display="inline";

  // }
  return (
    <div>
        
        <nav className='navbar navbar-expand-lg bg-light 'id="nav" style={{paddingLeft:"14%"}}>
          <Link to="/home">
          <header className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" id="img"width={"1100px"} onClick={Myapp}/> */}
              <img src="https://cdn6.f-cdn.com/contestentries/1099542/25186549/598afd06da2cc_thumb900.jpg" className="App-logo" alt="logo" id="img"width={"150px"}/>
          </header>
        </Link>

            <Link className="navbar-brand " id="link"  to="/home">Home</Link> 
            <Link className="navbar-brand " id="link1" to="/about">About</Link>
            <Link className="navbar-brand " id="link2" to="/signup">SignUp</Link>
            <Link className="navbar-brand " id="link3" to="/login">Login</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
