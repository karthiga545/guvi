
import './App.css';
import LoginPage from "./components/LoginPage"
import React, { useState} from "react";





const Home=()=>{
  const[values,setValues]=useState({
    username:"",
  
    password:"",
    

  })
 
  const inputs=[{
    id:1,
    name:"username",
    type:"text",
    
    placeholder:"Username",
    errorMessage:"Enter the Username",
    label:"Username     ",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true,
    
  },


  {
    id:2,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Please Enter  Vaild Password",
    label:"Password     ",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    
    required:true
  }  

    
  ]
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))

    

  }
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }


  console.log(values);
  
  const messageAlert=()=>{
    alert("Login Successfully");
  }

  return (
  <div className='app'>
    <form onSubmit={handleSubmit}>
      <h1> Register</h1>
      {inputs.map((input)=>(

      <LoginPage key={input.id}{...input} value={values[input.name]} onChange={onChange} />
      ))}

       

       
       
          <button onClick={messageAlert}>Login</button>
        

       
      
    </form>
     
    
  </div> 


  )
}

export default Home;
