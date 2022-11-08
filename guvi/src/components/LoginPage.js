// import './components/formInput.css';
//import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import "./Loginpage.css";
// import { useState } from 'react';

function Loginpage(props) {
    const{label,errorMessage,onChange,id,...inputProps}=props;
  return (
    <div className='loginpage'>
        <label> {label}</label>
        <input {...inputProps} onChange={onChange} />
        <span>{errorMessage}</span>
         
    </div>
  ) 
}

export default Loginpage