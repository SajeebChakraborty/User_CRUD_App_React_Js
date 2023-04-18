import React from 'react'
import User from './User'
import { UsersContext } from '../context/UsersContext';
import { useContext } from 'react';

export default function Users() {
  
  const {users,setUsers} = useContext(UsersContext);

  return (

    <section>
      
        {users.map(user => <User key={user.id} user={user}/>)}

    </section>


  )
}
