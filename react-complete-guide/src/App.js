import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

class App extends Component{

  state = {
    persons:[
      { id:'1', name: 'Yurick', age: 19 },
      { id:'2', name: 'Jacke', age: 47 },
      { id:'3', name: 'Edson', age: 52 },
    ],
    otherVariable: 'Just a test',
    showPersons: false,
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }
  

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons //current state of showPersons
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
                      name={person.name}
                      age={person.age}
                      click={this.deletePersonHandler.bind(this, index)}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          {/* <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>My hobbie is racing</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Yurick Honda')}
            changed={this.nameChangedHandler}/>
          <Person 
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/> */}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }
    }

    let classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
      if(this.state.persons.length <= 1) {
        classes.push('bold'); // classes = ['red', 'bold']
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
      //<button onClick={() => this.switchNameHandler('Yurick Yussuke Honda')}>Switch name</button>
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React app'))
    );
  }
}

export default Radium(App);
