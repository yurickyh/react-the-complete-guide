import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    input: '',
  }

  changeInputHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  removeCharHandler = (index) => {
    let changed_input = this.state.input.split('');
    changed_input.splice(index, 1);
    this.setState({ 
      input: changed_input.join('')
    });
  }

  render() {
    
    const characters = (
      <div>
        {
          this.state.input.split('').map((charac, index) => {
            return <CharComponent key={index}
                                  elementString={charac}
                                  removeCharHandler={() => this.removeCharHandler(index)} />
          })
        }
      </div>
    );

    return (
      <div className="App">
        <input type="text" onChange={this.changeInputHandler} className='input' value={this.state.input}/>
        <p>{this.state.input}</p>
        <ValidationComponent textLength={this.state.input.length} key={this.state.input}/>
        {characters}
      </div>
    );
  }
}

export default App;
