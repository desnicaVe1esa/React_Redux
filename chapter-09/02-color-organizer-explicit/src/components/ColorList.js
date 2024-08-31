import '../../stylesheets/ColorList.scss'
import PropTypes from 'prop-types'
import Color from './Color'
import {rateColor, removeColor} from '../actions'
import {sortFunction} from '../lib/array-helpers'

const ColorList = ({store}) => {
    const {colors, sort} = store.getState() // Использование хранилища для получения доступа к исходным цветам
    const sortedColors = [...colors].sort(sortFunction(sort)) // Проведение соответствующей сортировки
    return (
        <div className="color-list">
            {(colors.length === 0) ?
                <p>No Colors Listed. (Add a Color)</p> :
                // Сортировка
                sortedColors.map(color =>
                    <Color key={color.id}
                           {...color}
                           onRate={(rating) =>
                               // Диспетчеризация хранилища
                               store.dispatch(
                                   rateColor(color.id, rating)
                               )
                           }
                           onRemove={() =>
                               // Диспетчеризация хранилища
                               store.dispatch(
                                   removeColor(color.id)
                               )
                           }
                    />
                )
            }
        </div>
    )
}

ColorList.propTypes = {
    store: PropTypes.object
}

export default ColorList