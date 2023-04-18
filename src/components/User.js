import React from 'react'

import { UsersContext } from '../context/UsersContext';
import { useContext } from 'react';

export default function User({user}) {

  const {users,setUsers} = useContext(UsersContext);

  const handleDelete = (id) => {

    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);

  }


  const{id,name}=user;
  return (
    <div>
      
        <h1>{id}</h1>
        <h1>{name}</h1>
        <button onClick={()=>{handleDelete(id)}}>delete</button>

    </div>
  )
}
