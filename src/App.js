import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';
import UsersContext from './context/UsersContext';

function App() {

  const[users, setUsers] = useState([

    {id:1,name:'sajeeb'},
    {id:2,name:'tr'}

  ]);

  const handleDeleteUser = (id) => {

    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);

  }

  const handleNewUser = (user) => {

    const newUser = [...users,user];
    setUsers(newUser);
  }

  return (
    
    <UsersContext.Provider value={{users,setUsers}}>

      <div>

      <NewUser handleNewUser={handleNewUser}/>
      <Users users={users} handleDeleteUser={handleDeleteUser}></Users>

      </div>

    </UsersContext.Provider>


  );
}

export default App;
