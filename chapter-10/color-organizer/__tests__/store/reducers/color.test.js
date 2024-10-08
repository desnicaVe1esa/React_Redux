import C from '../../../src/constants'
import { color } from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze' // Обеспечивает сохранность неизменяемости наших объектов состояния и действия

// describe - создание набора тестов
describe("color Reducer", () => {

    // it - тест
    it("ADD_COLOR success", () => {
        const state = {}
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: new Date().toString()
        }
        /*
            Происходит глубокая заморозка состояния и действия. Оба они должны быть неизменяемыми и их глубокая
            заморозка приведет к выдаче ошибки, если какой-либо код попытается внести в них изменения
         */
        deepFreeze(state)
        deepFreeze(action)
        /* --------------- */
        const result = color(state, action)
        expect(result)
            .toEqual({ // Обнаружитель совпадений
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: action.timestamp,
                rating: 0
            })
    })

    it("RATE_COLOR success", () => {
        const state = {
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: undefined
        }
        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 3
        }
        deepFreeze(state)
        deepFreeze(action)
        const result = color(state, action)
        expect(result)
            .toEqual({
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 3
            })
    })

    it("Defaults array for incorrect action", () =>
        expect(color()).toEqual({}))

})