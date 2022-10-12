import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
export default function Login() {
    let navigate=useNavigate();
    const [user,setUser]=useState([]);
    useEffect(()=>{
        loaduser();
    },[]);
    const loaduser=async ()=>{
        let res=await axios.get("http://localhost:4000/users");
        setUser(res.data);
    }
    const onSubmit=()=>{
        let flag=1;
     
        user.map((users,index)=>{
            let email=document.getElementById("loginE").value;
            let password=document.getElementById("loginP").value;
            if(users.email===email){
               if(users.password===password){
                flag=2;
               document.getElementById("addBtn").style.display="inline";
               document.getElementById("homeBtn").style.display="block";
               document.getElementById("loginBtn").style.display="none";
               document.getElementById("logo2").style.display="none";
               document.getElementById("logo").style.display="inline";
               navigate("/Home");
               } else{
                alert("Enter Correct Password.");
                navigate("/");
                flag=2;
               }
            }else{
               if(flag===2){
                flag=2;
               }
               else{
                flag=1;
               }
            }
        })
        if(flag===1){
            alert("Enter valid Email or Register first.");
        }
        
    }
  return (
    <div>
        <div style={{display:"flex"}}>
            <div>
            <img src="https://www.websitepentest.com/themes/new_theme/logintemplate/images/background.png"
                    className="img-fluid" width={"95%"} alt="Sample image"/>
            </div>
            <div  id='LoginDiv'>
                <from  id="form">
                    <h1 ><img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" style={{width:"30%",borderRadius:"50%"}}></img></h1>
                    
                    <table id="table">
                        <tr>
                            <td colSpan="2" ><input class="form-control" type="email"id="loginE" name="email"required placeholder='Enter the Email'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"  ><input class="form-control"type="password"id="loginP"  name="password"required placeholder='Enter the Password' /></td>
                        </tr>
                       
                        <tr>
                            <td colSpan="2" >
                                <button className="btn btn-outline-success"onClick={e=>onSubmit()}>Login</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                Don't have account ? <Link to="/register" id='link'><b>Register</b></Link>
                            </td>
                        </tr>
                    </table>
                    
                 </from>
              
            </div>
        </div>
    </div>
  )
}
