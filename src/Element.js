import React from 'react';
import './Element.css';

const Element = props => (
    <li className="Element">
        <data value={props.element.elementLabel.value}>{props.element.symbol.value}</data>
        <dl>
            <dt>Element Name</dt>
            <dd>{props.element.elementLabel.value}</dd>

            <dt>Element Number</dt>
            <dd>{props.element.number.value}</dd>

            <dt>Element Symbol</dt>
            <dd>{props.element.symbol.value}</dd>
        </dl>
    </li>
);

export default Element