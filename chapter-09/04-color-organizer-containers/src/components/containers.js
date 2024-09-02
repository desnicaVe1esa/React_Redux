import { connect } from 'react-redux'
import AddColorForm from './ui/AddColorForm'
import SortMenu from './ui/SortMenu'
import ColorList from './ui/ColorList'
import { addColor, rateColor, removeColor, sortColors } from '../actions'
import { sortFunction } from '../lib/array-helpers'


/*
    connect - функция высшего порядка, которая возвращает компонент. Работает в связке с провайдером. Ожидает получение
    двух аргументов: mapStateToProps и mapDispatchToProps - функции. connect возвращает функцию, ожидающую
    презентационный компонент, и заключает ее в контейнер, отправляющий свои данные через свойства
    mapStateToProps - вводит состояние в видк аргумента и возвращает объект, который будет отображен на свойства
    mapDispatchToProps - вводит принадлежащую хранилищу функцию dispatch в виде аргумента, который может использоваться
    при вызове компонентом свойств функции обратного вызова
 */

export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title,color))
            }
        })
)(AddColorForm)

export const Menu = connect(
    state =>
        ({
            sort: state.sort
        }),
    dispatch =>
        ({
            onSelect(sortBy) {
                dispatch(sortColors(sortBy))
            }
        })
)(SortMenu)

export const Colors = connect(
    state =>
        ({
            colors: [...state.colors].sort(sortFunction(state.sort))
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