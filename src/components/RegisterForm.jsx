import React, { useState } from 'react'

const RegisterForm = () => {
    const [formField, setFormfield]=useState({
        username: "",
        email: "",
        password:"",
    })
    
const isDisabled = !formField.username || !formField.email || !formField.password;

  return (
    <div>
        <form >
            <label htmlFor="username">Username</label>
            <input type="text" value={formField.username} onChange={(e)=>{setFormfield((currentstate)=>({...currentstate, username: e.target.value}))}}  />
            <label htmlFor="email">Email</label>
            <input type="email" value={formField.email} onChange={(e)=>{setFormfield((currentstate)=>({...currentstate, email: e.target.value}))}}  />
            <label htmlFor="password">Password</label>
            <input type="password" value={formField.password} onChange={(e)=>{setFormfield((currentstate)=>({...currentstate, password: e.target.value}))}} />
            <button disabled={isDisabled} >Submit</button>
        </form>
      
    </div>
  )
}

export default RegisterForm
