import {Component} from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import '../../stylesheets/Color.scss'

class Color extends Component {

    // Инициализация объектов цвета с помощью стиля и установка для всех 4-х элементов Color
    componentWillMount() {
        this.style = {backgroundColor: "#CCC"}
    }

    // Повышает производительность - предотвращает обнолвение цветов, когда их значения свойств не изменялись
    shouldComponentUpdate(nextProps) {
        const {rating} = this.props
        return rating !== nextProps.rating
    }

    // Будет вызван, только если компонент бует обновляться
    componentWillUpdate(nextProps) {
        const {title, rating} = this.props
        // Удаляет серый фон из каждого цвета непосредственно перед обновлением последнего
        this.style = null
        this.refs.title.style.backgroundColor = "red"
        this.refs.title.style.color = "white"
        // Выдача оповещения об изменении рейтинга. Приостанавливает процесс обновления
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    /*
       Получает предыдущие свойства и предыдущее состояние, поскольку если дошло до его примененя, значит,
       обновление уже состоялось и свойства были изменены
    */
    componentDidUpdate(prevProps) {
        const {title, rating} = this.props
        // Повысился рейтинг или понизился
        const status = (rating > prevProps.rating) ? 'better' : 'worse'
        console.log(`${title} is getting ${status}`)
        this.refs.title.style.backgroundColor = ""
        this.refs.title.style.color = "black"
    }

    render() {
        const {title, color, rating, onRemove, onRate} = this.props
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}>X</button>
                <div className="color"
                     style={{backgroundColor: color}}>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }

}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Color.defaultProps = {
    rating: 0,
    onRemove: f => f,
    onRate: f => f
}

export default Color