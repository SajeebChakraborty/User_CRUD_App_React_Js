import React from 'react'
import User from './User'

export default function Users({users,handleDeleteUser}) {
  return (

    <section>
      
        {users.map(user => <User key={user.id} user={user} handleDeleteUser={handleDeleteUser}/>)}

    </section>


  )
}
