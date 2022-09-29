import React,{useState} from 'react'

const Form_three = () => {
  const [name,setName]=useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(name);
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <label> First Name :
        <input type="text" name={"n1"} onChange={(e)=>setName(e.target.value)}  /></label>
         <input type="submit" /> 
       </form>
    </div>
  )
}

export default Form_three;