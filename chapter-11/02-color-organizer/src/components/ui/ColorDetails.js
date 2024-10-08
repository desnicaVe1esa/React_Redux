import PropTypes from 'prop-types'
import Whoops404 from './Whoops404'
import '../../stylesheets/ColorDetails.scss'
/*
   Презентационный компонент. Ожидает свойства, содержащие информацию о цвете. Будет отображаться на экране,
   когда пользователь выбирает один цвет
*/
const ColorDetails = ({ title, color, history, location }) => // history - свойство маршрутиризатора
    (!color) ?
        <Whoops404 location={location}/> :
        <div className="color-details"
             style={{backgroundColor: color}}
             {/* history.goBack() - возвращает пользователя к предыдущему месту просмотра */}
             onClick={() => history.goBack()}>
            <h1>{title}</h1>
            <h1>{color}</h1>
        </div>

ColorDetails.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default ColorDetails
