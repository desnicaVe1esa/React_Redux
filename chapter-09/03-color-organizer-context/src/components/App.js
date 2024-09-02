import '../../stylesheets/APP.scss'
import { Component } from 'react'
import PropTypes from 'prop-types'
import SortMenu from './SortMenu'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'
import { sortFunction } from '../lib/array-helpers'

/*
    Передача хранилища через контекст выполняется быстрее, чем явная передача. Явную передачу можно сравнить с поездом,
    который преодолевает путь от корневого компонента в компоненты-листья по всем компонентам
    Контекст - преимущество функционального свойства React. Позволяет передавать переменные без явной передачи их вниз по
    дереву свойств. Доступ к этим контекстны переменным могут получить любые дочерние компоненты
 */
class App extends Component {

    // Жизненный цикл - возвращает объект, определяющий контекст
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    // Открытие подписки на хранилище
    componentWillMount() {
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate() // Запуск жизненного цикла обновления, который заново отобразит пользовательский интерфейс
        )
    }

    // Отписка
    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const { colors, sort } = store.getState()
        const sortedColors = [...colors].sort(sortFunction(sort))
        return (
            <div className="app">
                <SortMenu />
                <AddColorForm />
                <ColorList colors={sortedColors} />
            </div>
        )
    }

}

App.propTypes = {
    store: PropTypes.object.isRequired
}

// Благодаря этому свойству любой дочерний компонент по отношению к App будет иметь доступ к хранилищу через контекст
App.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default App