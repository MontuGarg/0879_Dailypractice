import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";
export default function User() {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async ()=>{
        let result=await axios.get(`http://localhost:4000/users/${id}`)
        setUser(result.data);

    }
  return (
    <div >
        <div style={{display:"flex"}}>
            <Link to="/home"style={{height:"auto",margin:"5px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
            <div >
            <img src="https://img.freepik.com/free-vector/instant-information-concept-illustration_114360-5264.jpg?w=740&t=st=1665221478~exp=1665222078~hmac=07982cf036704e82e1ee404731cadca5067e1fb6f932f12a9bd576107957dd75"
                    className="img-fluid" width={"88%"} alt="Sample image"/>
            </div>
            
            <div id="User">
                <img src='https://icons.iconarchive.com/icons/icons8/windows-8/512/Data-View-Details-icon.png' style={{width:"20%",margin:"-10% 0% 5% 16%"}}></img>
                <h1>Employee Details</h1>
                <table className='table table-bordered '>
                    <tr><td>Name </td><td>{user.name}</td> </tr>
                    <tr><td>UserName </td><td>{user.username}</td> </tr>
                    <tr><td>Email </td><td>{user.email}</td></tr>
                    <tr><td>Password </td><td>{user.password}</td></tr>
                </table>
            </div>
        </div>
        
    </div>
  )
}
