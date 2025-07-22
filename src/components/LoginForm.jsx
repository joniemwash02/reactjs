import React, { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const isDisplayed= !username || !password;
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(username)
                        console.log(password)


        }}>
            <label htmlFor="username">Username</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} /><br />
            <label htmlFor="password" >Password</label>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button disabled={isDisplayed}>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm