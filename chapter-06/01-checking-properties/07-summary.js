import React from "react";
import {PropTypes}  from "react";

// Реструктуризация в классовый компонент

class Summary extends React.Component {
    render() {
        const {ingredients, steps, title} = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients</span> | <span>{steps} Steps</span>
                </p>
            </div>
        )
    }
}

Summary.propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error("A title must be a string") :
            (props[propName].length > 20) ?
                new Error("Title is over 20 characters") :
                null
}

Summary.defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[recipe]"
}