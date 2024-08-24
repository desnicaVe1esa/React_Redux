import React from "react";

const Summary = React.createClass({
    displayName: "Summary",
    render() {
        const {ingredients, steps, title} = this.props /*
                                                          Отсутствует типизация свойств. Выполнение программы может
                                                          произойти некорректно
                                                        */
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    {/*
                        Если придет строка, а не массив, как ожидается, то будет посчитано не количество элементов
                        массива, а будет посчитано количество символов в строке
                    */}
                    <span>{ingredients.length} Ingredients</span> |
                    <span>{steps.length} Steps</span>
                </p>
            </div>
        )
    }
})