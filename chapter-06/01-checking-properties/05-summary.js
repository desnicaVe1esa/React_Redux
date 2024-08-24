import React from "react";
import {createClass, PropTypes}  from "react";

const Summary = createClass({
    displayName: "Summary",
    propTypes: {
      ingredients: PropTypes.number.isRequired,
      steps: PropTypes.number.isRequired,
      title: PropTypes.string,
    },
    // Установка свойств по умолчанию на случай, если  в компонент Summary ничего не поступит
    getDefaultProps() {
      return {
          ingredients: 0,
          steps: 0,
          title: "[recipe]"
      }
    },
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
})