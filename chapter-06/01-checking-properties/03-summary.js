import React from "react";
import {createClass, PropTypes}  from "react";

const Summary = createClass({
    displayName: "Summary",
    propTypes: {
      /*
          Если в компонент Summary не поступит никаких свойств, то будет ошибка, так как ingredients получит тип
          undefined, который не имеет свойство length. isRequired указывается для данного случая. Теперь при отображении
          Summary без свойств в консоль выведется предупреждение перед возникновением ошибки. Будет проще выяснить
          причину сбоя
      */
      ingredients: PropTypes.array.isRequired,
      steps: PropTypes.array.isRequired,
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