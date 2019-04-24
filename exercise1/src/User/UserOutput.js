import React, {Component} from 'react';
import './UserOutput.css'

class UserOutput extends Component {
    render() {
        return(
            <div className='UserOutput'>
                <p id='output'>{this.props.username}</p>
                <p>The second paragraph is just a test</p>
            </div>
        );
    }
}

export default UserOutput;