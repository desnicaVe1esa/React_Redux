import React from "react";
import {PropTypes} from "react";

// Установка свойст по умолчаннию

const Summary = ({ingredients = 0, steps = 0, title = "[recipe]"}) => {

    return <div>
        <h1>{title}</h1>
        <p><span>{ingredients} Ingredients</span> | <span>{steps} Steps</span></p>
    </div>
}