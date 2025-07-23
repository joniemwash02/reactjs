import React, { useState } from 'react'

const LoginForm = ({ users, setUsers }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [count, setCount] = useState(users.length + 1)
  const isDisplayed = !username || !email;
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newUser = {
          id: count,
          username,
          email
        }
        setCount((currentCounter) => currentCounter + 1)
        setUsers((currentUser) => [...currentUser, newUser])
        setUsername('');
        setEmail('');



      }}>
        <label htmlFor="username">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label htmlFor="password" >Password</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <button disabled={isDisplayed}>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm