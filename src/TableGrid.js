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
            <ol className="Grid">
                {
                    elements.results.bindings.map(obj => 
                        <Element key={obj.element.value} element={obj}></Element>
                    )
                }
            </ol>
        )
    }
}

export default TableGrid;