import React from "react";
import elements from "./elements.json";
import Element from "./Element";
import './TableGrid.css';

class TableGrid extends React.Component {
    printElements() {
        console.info(elements);
    }

    render() {
        return (
            <ul className="Grid">
                {
                    elements.results.bindings.map(obj => 
                        <Element key={obj.element.value} name={obj.symbol.value}></Element>
                    )
                }
            </ul>
        )
    }
}

export default TableGrid;