
import './components/formInput.css';
import FormInput from "./components/FormInput"
import React, { useState} from "react";
import {Link} from "react-router-dom";

const App=()=>{
  const[values,setValues]=useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",

  })

  const inputs=[{
    id:1,
    name:"username",
    type:"text",
    
    placeholder:"Username",
    errorMessage:"Username should be 3-16 charatcers and should not include special characters!",
    label:"Username     ",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true,
    
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"Enter Valid Email ID",
    label:"Email    ",
    required:true
  },
  {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    
    label:"Birthday    "
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password Should be 8-20 characters and include at least 1 letter, 1 number, 1 special character",
    label:"Password     ",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    
    required:true
  }  ,
  {
    id:5,
    name:"confrimpassword",
    type:"password",
    placeholder:"Confrim Password",
    errorMessage:"Password Not Matched",
    label:"Confrim Password       ",
    pattern: values.password,
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

  return (
  <div className='app'>
    <form onSubmit={handleSubmit}>
      <h1> Register</h1>
      {inputs.map((input)=>(

      <FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange} />
      ))}

       

       {/* <button onClick={messageAlert}>Register</button> */}
       <Link  to={'./Home'}>
          <button>Login</button>
          </Link>
        

       
      
    </form>
     
    
  </div> 


  )
}

export default App;
