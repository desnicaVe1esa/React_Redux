import React from "react";
import {createClass, PropTypes}  from "react";

const Summary = createClass({
    displayName: "Summary",
    propTypes: {
      ingredients: PropTypes.number.isRequired,
      steps: PropTypes.number.isRequired,
      // Настраиваемая проверка свойств
      title: (props, propName) =>
          (typeof props[propName] !== 'string') ?
            new Error("A title must be a string") :
              (props[propName].length > 20) ?
                new Error("Title is over 20 characters") :
                null
    },
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