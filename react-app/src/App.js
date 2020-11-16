/* eslint-disable no-unused-vars */
import Profile from './Profile';
import User from './User';

function App() {
  const users = [
    { name: "Ryu", age: 30, belt: "black", id: 1 },
    { name: "Yoshi", age: 20, belt: "green", id: 2 },
    { name: "Benedict Cumberbatch", age: 43, belt: "Old black", id: 3 }
  ];

  return (
    <div className="App">
      <h1>My first React APP !</h1>
      <p>Hello world </p>
      <Profile  name={"Lucien"} age={"22"} active={'true'}/>
      <User users = {users}/>
    </div>
  );
}

export default App;
