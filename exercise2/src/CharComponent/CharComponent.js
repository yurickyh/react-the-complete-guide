import React, { Component } from 'react';
import './CharComponent.css'

class CharComponent extends Component {

    render() {
        return(
            <p className='char-component' onClick={this.props.removeCharHandler}>{this.props.elementString}</p>
        )
    }
}

export default CharComponent;