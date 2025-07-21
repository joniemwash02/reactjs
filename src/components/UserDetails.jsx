import React from 'react'

const UserDetails = ({user}) => {
  return (
    <div>
        <b>Username:</b> <span>{user.username}</span><br />
        <b>Email: </b><span>{user.email}</span>
        <br />
        <br />


        
    </div>
  )
}

export default UserDetails