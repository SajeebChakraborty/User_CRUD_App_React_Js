import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';
import { UsersContext } from './context/UsersContext';

function App() {

  const[users, setUsers] = useState([

    {id:1,name:'sajeeb'},
    {id:2,name:'tr'}

  ]);


  return (
    
    <UsersContext.Provider value={{users,setUsers}}>

      <div>

      <NewUser/>
      <Users></Users>

      </div>

    </UsersContext.Provider>


  );
}

export default App;
