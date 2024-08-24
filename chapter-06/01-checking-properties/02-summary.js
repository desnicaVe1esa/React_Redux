import React from "react";

const Summary = React.createClass({
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