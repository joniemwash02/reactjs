import React, { useState } from 'react'
import UserDetails from './UserDetails'

const Users = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'john chege',
            email: 'joniemwash4@gmail.com'
        },
        {
            id: 2,
            username: 'mary wambui',
            email: 'marywambui@example.com'
        },
        {
            id: 3,
            username: 'peter kamau',
            email: 'peterkamau@example.com'
        },
        {
            id: 4,
            username: 'lucy nduta',
            email: 'lucynduta@example.com'
        },
        {
            id: 5,
            username: 'samuel maina',
            email: 'samuelmaina@example.com'
        }

    ])

    return (
        <div>
            {users.map((user)=>(
                 <UserDetails key={user.id} user={user} />

            )
               
            )}


        </div>
    )
}

export default Users
