import React, { Component } from 'react';
import './ValidationComponent.css';

class ValidationComponent extends Component {

    render() {
        let textStatus = 'Text too long';
        if (this.props.textLength < 5){
            textStatus = 'Text too short';
        }
        return (
            <div>
                <p className="validation-component">TEXT STATUS:</p>
                <p className="validation-component">{textStatus}</p>
            </div>
        );
    }
}

export default ValidationComponent;