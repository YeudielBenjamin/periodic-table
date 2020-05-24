import React from 'react';
import './Element.css';

class Element extends React.Component {

    render() {
        return (
            <li className="Element">{this.props.name}</li>
        )
    }
}

export default Element