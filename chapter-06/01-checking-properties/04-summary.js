import React from "react";
import {createClass, PropTypes}  from "react";

const Summary = createClass({
    displayName: "Summary",
    propTypes: {
      // Требуется лишь длиннма массива, поэтому произведене реструктуризация для более гибкого подхода к решению задачи
      ingredients: PropTypes.number.isRequired,
      steps: PropTypes.number.isRequired,
      title: PropTypes.string,
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