import { connect } from 'react-redux'
import { compose } from 'redux'
import ColorList from './ui/ColorList'
import ColorDetails from './ui/ColorDetails'
import AddColorForm from './ui/AddColorForm'
import { addColor, rateColor, removeColor } from '../actions'
import { findById } from '../lib/array-helpers'
import { sortColors } from '../lib/array-helpers'

export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title, color))
            }
        })
)(AddColorForm)

/*
   Удален компонент Menu. Вместо этого инструкции по сортировке будут приходить в качестве параметра маршрута, п
   ередаваемого в Color внутри свойства match
*/
export const Colors = connect(
    ({colors}, {match}) =>
        ({
            colors: sortColors(colors, match.params.sort)
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeColor(id))
            },
            onRate(id, rating) {
                dispatch(rateColor(id, rating))
            }
        })
)(ColorList)

/*
   Контейнер, который находит выбранный цвет в состоянии, используя параметр маршрутиризации
   Color создан с помощью компонента высшего порядка connect. Первый аргумент - функция, которая устанавливает свойства
   ColorDetails на основе данных одного цвета, взятого из состояния
*/
export const Color = connect(
    ({ colors }, { match }) => findById(colors, match.params.id) /*
                                                                    findById - находит в состоянии отдельный объект цвета
                                                                    с параметром идентификатора id, полученным из URL
                                                                  */
)(ColorDetails)
