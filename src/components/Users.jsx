import React, { useState } from 'react'
import UserDetails from './UserDetails'
import LoginForm from './LoginForm'

const Users = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'john chege',
            email: 'joniemwash4@gmail.com'
        },
        
    ])

    return (
       <div>
        <div>
            <LoginForm users={users} setUsers={setUsers} />          
        </div>
         <div>
            {users.map((user)=>(
                 <UserDetails key={user.id} user={user} setUsers={setUsers} />
            ))}
        </div>
       </div>
    )
}

export default Users
