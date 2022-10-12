import React ,{useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate,useParams} from "react-router-dom";
export default function EditUser() {
    let history=useNavigate();
    const {id}=useParams();

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:""
    })
    const {name,username,email,password}=user;
    const onValChange= e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:4000/users/${id}`,user);
        history("/Home");
    }
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async()=>{
        let result=await axios.get(`http://localhost:4000/users/${id}`);
        setUser(result.data);
    }
  return (
    <div style={{display:"flex"}}>
        <Link to="/home"style={{height:"auto",margin:"5px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
        <div>
        <img src="https://img.freepik.com/free-vector/creative-content-writing-copywriting-blogging-internet-marketing-article-text-editing-publishing-online-documents-writer-editor-character-concept-illustration_335657-1714.jpg?w=740&t=st=1665220063~exp=1665220663~hmac=352b26c2985cdbd8d633707ff4c1ba0bfd1240e07949ef2ac82f9b1b9b3468b1"
                    className="img-fluid" width={"95%"} alt="Sample image"/>
        </div>
        <div id="AddUser">
        <form onSubmit={e=>onSubmit(e)}>
        <h1 ><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" style={{width:"30%",margin:"-15% 0% 5% 15%",borderRadius:"20%"}}></img></h1>
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
                    
                    <input type="text" name='password' value={password} placeholder="Password" onChange={e=>onValChange(e)} class="form-control"/>
                </div>
            <input type="submit" value="Edit User"class="btn btn-success"/>
        </form>
        </div>
    </div>
  )
}
