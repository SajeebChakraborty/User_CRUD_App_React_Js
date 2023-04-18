import React from 'react'

import { useState } from 'react';
import { UsersContext } from '../context/UsersContext';
import { useContext } from 'react';

export default function NewUser() {

  const [username, setUsername] = useState('');
  
  const {users,setUsers} = useContext(UsersContext);

  const handleUsername = (e) => {

    setUsername(e.target.value);

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const user = {id:Math.random(),name:username};
    const newUser = [...users,user];
    setUsers(newUser);

  }

  return (
    <div>
      
    <form onSubmit={handleSubmit}>

        <input type="text" placeholder="name" value={username} onChange={handleUsername}/>
        <button type="submit">Add</button>


    </form>

    </div>
  )
}
