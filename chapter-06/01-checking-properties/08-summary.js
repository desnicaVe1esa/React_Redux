import React from "react";
import {PropTypes} from "react";

// Реструктуризация в функциональный компонент, не имеющий состояний

const Summary = ({ingredients, steps, title}) => {

    return <div>
        <h1>{title}</h1>
        <p><span>{ingredients} Ingredients</span> | <span>{steps} Steps</span></p>
    </div>
}

Summary.propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired
}

Summary.defaultProps = {
    ingredients: 1,
    steps: 1
}