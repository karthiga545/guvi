// import './components/formInput.css';
//import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import "./formInput.css";
// import { useState } from 'react';

function FormInput(props) {
    const{label,errorMessage,onChange,id,...inputProps}=props;
  return (
    <div className='formInput'>
        <label> {label}</label>
        <input {...inputProps} onChange={onChange} />
        <span>{errorMessage}</span>
         
    </div>
  ) 
}

export default FormInput