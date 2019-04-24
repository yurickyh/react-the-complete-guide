import React, {Component} from 'react';
import './UserInput.css'

class UserInput extends Component {

    render() {
        return(
            <div>
                <label>Username: </label>
                <input className='UserInput' type='text' value={this.props.currentName} onChange={this.props.change}/>
                <button onClick={this.props.reset.bind(this, 'yurickyh')}>Reset</button> 
            </div>
        );
    }
}

export default UserInput;