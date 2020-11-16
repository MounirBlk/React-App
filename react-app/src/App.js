/* eslint-disable no-unused-vars */
import Profile from './Profile';
import User from './User';
import NewUser from './NewUser';
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Ryu", age: 30, belt: "black", id: 1 },
    { name: "Yoshi", age: 22, belt: "green", id: 2 },
    { name: "Benedict Cumberbatch", age: 17, belt: "Old black", id: 3 }
  ])

  let addUser = async(user) => {
    user.id = users.length+1;
    await setUsers([...users,user])
    /*await this.setState({
        [e.target.id]: e.target.value
    })*/
  }

  let deleteUser = async(id) => {
    let utilisateurs = users.filter(user => {
      return user.id !== id
    });
    await setUsers(utilisateurs)
  }

  let showUsers = async() => {
    console.log(users)
  }
  
  return (
    <div className="App">
      <h1>My first React APP !</h1>
      <p>Hello world </p>
      <Profile  name={"Lucien"} age={"22"} active={'true'}/><br />
      <User deleteUser={deleteUser} users={users}/>
      <NewUser addUtilisateur={addUser}/>
      <button onClick={showUsers}>Show users logs</button>
    </div>
  );
}

export default App;
