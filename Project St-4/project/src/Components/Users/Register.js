import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function Register() {
    let history=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:""
    })
    const {name,username,email,password}=user;
    const onValChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/users",user);
        history("/");
    }

  return (
    
    <div style={{display:"flex"}}>
        <Link to="/"style={{height:"auto",margin:"5px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
        <div >
        <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1665218317~exp=1665218917~hmac=f3151c63670ee0a745aca6df8eceeffc5cc33876a073c045434db196d2847dcf"
                    className="img-fluid" width={"95%"} alt="Sample image"/>
        </div>
        <div id="AddUser">
        
            <form onSubmit={e=>onSubmit(e)}>
            <h1 ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_2tXKRQZSP-KRfr3OwTZEv3P8smVFl34HWjULItdHA&s" style={{width:"20%",margin:"-5% 0% 5% 20%",borderRadius:"20%"}}></img></h1>
                <div class="mb-3">
                    
                    <input type="text" name='name'  value={name} placeholder="Name" required onChange={e=>onValChange(e)}class="form-control "/>
                </div>
                <div class="mb-3">
                    
                    <input type="text" name='username'value={username}required placeholder="UserName" onChange={e=>onValChange(e)} class="form-control"/>
                </div>
                <div class="mb-3">
                   
                    <input type="Email" name='email' value={email} placeholder="Email" onChange={e=>onValChange(e)} class="form-control"/>
                </div>
                <div class="mb-3">
                    
                    <input type="password" name='password' value={password} placeholder="Password" onChange={e=>onValChange(e)} class="form-control"/>
                </div>
                <input type="submit" value="Register"class="btn btn-success"/>
            </form>

        </div>
    </div>
  )
}
