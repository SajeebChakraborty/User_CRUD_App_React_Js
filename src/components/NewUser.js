import React from 'react'

import { useState } from 'react';

export default function NewUser({handleNewUser}) {

  const [username, setUsername] = useState('');

  const handleUsername = (e) => {

    setUsername(e.target.value);

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const user = {id:Math.random(),name:username};
    handleNewUser(user);

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
