import React from 'react'

export default function User({user,handleDeleteUser}) {

  const handleDelete = (id) => {

    handleDeleteUser(id);

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
