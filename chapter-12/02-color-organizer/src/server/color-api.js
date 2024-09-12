import { Router } from 'express' // Router - используется для создания конечных точек HTTP
import C from '../constants'
import { v4 } from 'uuid'

const router = Router()

// Диспетчерезация действий на серверное хранилище и отправка действий клиенту
const dispatchAndRespond = (req, res, action) => {
    req.store.dispatch(action)
    res.status(200).json(action)
}

// Выдача текущего массива цветов из состояния на стороне сервера
router.get("/colors", (req, res) =>
    res.status(200).json(req.store.getState().colors)
)

// Создание новго объекта действия с цветами и отправка его в dispatchAndRespond
router.post("/colors", (req, res) =>
    dispatchAndRespond(req, res, {
        type: C.ADD_COLOR,
        id: v4(),
        title: req.body.title,
        color: req.body.color,
        timestamp: new Date().toString()
    })
)

// Изменение рейтинга цвета
router.put("/color/:id", (req, res) =>
    dispatchAndRespond(req, res, {
        type: C.RATE_COLOR,
        id: req.params.id,
        rating: parseInt(req.body.rating)
    })
)

// Удаление цвета по id
router.delete("/color/:id", (req, res) =>
    dispatchAndRespond(req, res, {
        type: C.REMOVE_COLOR,
        id: req.params.id
    })
)

export default router
