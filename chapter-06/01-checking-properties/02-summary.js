import React from "react";
import {createClass, PropTypes}  from "react";

const Summary = createClass({
    displayName: "Summary",
    propTypes: { // Ниже приведены средства проверки типов
      ingredients: PropTypes.array,
      steps: PropTypes.array,
      title: PropTypes.string,
    },
    render() {
        const {ingredients, steps, title} = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients.length} Ingredients</span> |
                    <span>{steps.length} Steps</span>
                </p>
            </div>
        )
    }
})