import React, { useState } from 'react'

const UserDetails = ({ user }) => {
  const [isEditing, setIsediting]=useState(false)
  const [username, setUsername]=useState(user.username)
  const [email, setEmail]=useState(user.email)

  
  

  return (
    <div>
      <div>
        <button onClick={()=>setIsediting((currentvalue)=>!currentvalue)}>edit</button>
        <button>delete</button>
      </div>

      <div>
        <b>ID:</b> <span>{user.id}</span><br />
        <b>Username:</b> {isEditing ? <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />: <span>{user.username}</span>}<br />
        <b>Email: </b>{isEditing ? <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>: <span>{user.email}</span>}
        <br />
        <br />
      </div>

    </div>
  )
}

export default UserDetails