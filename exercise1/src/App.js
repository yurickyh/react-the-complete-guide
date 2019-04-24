import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput'

class App extends Component {

  state = {
    users: [
      { username: 'yurickyh' },
      { username: 'yuricky' },
      { username: 'yurick' },
    ]
  }

  resetUsernameHandler = (oldname) => {
    this.setState({
      users: [
        { username: oldname},
        { username: 'yuricky' },
        { username: 'yurick' },
      ]
    });
  }

  usernameChangeHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: 'yuricky' },
        { username: 'yurick' },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          change={this.usernameChangeHandler}
          reset={this.resetUsernameHandler}
          currentName={this.state.users[0].username}/>
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[1].username} />
        <UserOutput username={this.state.users[2].username} />
      </div>
    );
  }
}

export default App;
