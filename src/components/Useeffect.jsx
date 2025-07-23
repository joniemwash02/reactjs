import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/userss")
        .then((responce)=>responce.json())
        .then((data)=>setUsers(data))
        .catch((error)=>console.log(error))

    }, [])
  return (
    <div className="container">
      <h2 className="title">User Profiles</h2>
      <div className="cards">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p className="address">
              <strong>Address:</strong> {user.address.suite}, {user.address.street},<br />
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Useeffect