import React from 'react';
import './Element.css';

class Element extends React.Component {

    render() {
        return (
            
            <li className="Element">
                <data value={this.props.element.elementLabel.value}>{this.props.element.symbol.value}</data>
                <dl>
                    <dt>Element Name</dt>
                    <dd>{this.props.element.elementLabel.value}</dd>

                    <dt>Element Number</dt>
                    <dd>{this.props.element.number.value}</dd>

                    <dt>Element Symbol</dt>
                    <dd>{this.props.element.symbol.value}</dd>
                </dl>
            </li>
        )
    }
}

export default Element