import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors } from './reducers'
import thunk from 'redux-thunk' /*
                                    thunk - это промежуточное программное обеспечение для Redux. Оно позволяет писать
                                    создатели действий, которые возвращают функцию вместо объекта. Эта функция принимает
                                    в качестве аргументов метод dispatch хранилища и функцию getState. Она может отправлять
                                    несколько действий, выполнять асинхронные операции и получать доступ к текущему состоянию,
                                    если это необходимо перед отправкой действия
                                    Основная цель Redux-Thunk — обработка асинхронных действий в Redux. С его помощью приложение
                                    может плавно управлять как синхронными, так и асинхронными операциями
                                    Обычно Redux-Thunk используют для асинхронных запросов к внешней API, для получения
                                    или сохранения данных
                                 */

const clientLogger = store => next => action => {
    if (action.type) {
        let result
        console.groupCollapsed("dispatching", action.type)
        console.log('prev state', store.getState())
        console.log('action', action)
        result = next(action)
        console.log('next state', store.getState())
        console.groupEnd()
        return result
    } else {
        return next(action)
    }
}

const serverLogger = store => next => action => {
    console.log('\n  dispatching server action\n')
    console.log(action)
    console.log('\n')
    return next(action)
}

// Возвращает связующий код, который должен быть встроен в новое хранилище в единый массив
const middleware = server => [
    (server) ? serverLogger : clientLogger,
    thunk
]

// Изоморфный storeFactory
const storeFactory = (server = false, initialState = {}) =>
    applyMiddleware(...middleware(server))(createStore)(
        combineReducers({colors}),
        initialState
    )

export default storeFactory
