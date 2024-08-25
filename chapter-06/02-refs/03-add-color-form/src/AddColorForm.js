import React from "react";
import PropTypes from "prop-types";

class AddColorForm extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        const {_title, _color} = this.refs;
        e.preventDefault();
        // Проверка, предоставлено ли свойство
        if (this.props.onNewColor) {
            this.props.onNewColor(_title.value, _color.value)
        }
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }


    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title..." required/>
                <input ref="_color" type="color" required/>
                <button>ADD</button>
            </form>
        )
    }
}

AddColorForm.propsTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    /*
        Функция-заместитель, возвращающая первый аргумент. Ничего не делает, но js может ее вызвать без выдачи сообщений
        об ошибках
     */
    onNewColor: f => f
}

export default AddColorForm;