import React, { useState, Fragment } from 'react';
import UserInputs from './components/UserInputs';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (userName, userAge, collegeName) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: userName, age: userAge, collegeName: collegeName, id: Math.random().toString()}]
    })
  }
  return (
    <Fragment>
      
      <UserInputs onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
