
import React, { useState } from 'react';

const UserDetails = ({ user, setUsers }) => {
  // State for whether we're editing or not
  const [isEditing, setIsEditing] = useState(false);

  // State for username and email input values (initially filled from props)
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  // Function to handle saving the edited data
  const handleSave = () => {
    setUsers((previousUsers) =>
      previousUsers.map((currentUser) => {
        if (currentUser.id === user.id) {
          // Update only the user being edited
          return { ...currentUser, username, email };
        } else {
          return currentUser; // Return others unchanged
        }
      })
    );

    setIsEditing(false); // Exit edit mode after saving
  };

  // Function to delete the user
  const handleDelete = () => {
    setUsers((previousUsers) =>
      previousUsers.filter((currentUser) => currentUser.id !== user.id)
    );
  };

  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem 0' }}>
      {/* Action Buttons */}
      <div>
        {<button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>}
        <button onClick={handleDelete}>Delete</button>
        {isEditing && <button onClick={handleSave} >
          Save
        </button>}
  
      </div>

      {/* User Details */}
      <div>
        <p><b>ID:</b> {user.id}</p>

        <p>
          <b>Username:</b>{' '}
          {isEditing ? (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            user.username
          )}
        </p>

        <p>
          <b>Email:</b>{' '}
          {isEditing ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            user.email
          )}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
