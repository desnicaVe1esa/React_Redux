import express from 'express' /*
                                Express.js — это минималистичный и гибкий веб-фреймворк для Node.js, который облегчает
                                разработку веб-приложений и API. Он предоставляет простой интерфейс и набор функций,
                                позволяющих быстро создавать серверы и маршрутизировать запросы
                               */
import path from 'path'
import bodyParser from 'body-parser'
import fs from 'fs' // fs - используется для сохранения нового состояни в указаном файле
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server' // renderToString - отображает дерево React в строку HTMLF
import api from './color-api'
import App from '../components/App'
import storeFactory from '../store'
import initialState from '../../data/initialState.json'

const staticCSS = fs.readFileSync(path.join(__dirname, '../../dist/assets/bundle.css'))
const fileAssets = express.static(path.join(__dirname, '../../dist/assets'))

// Экземпляр хранилища, который запускается на сервере
const serverStore = storeFactory(true, initialState)

// subscribe - отслеживает изменения состояния и сохраняет новый JSON-файл при каждом изменении
serverStore.subscribe(() =>
    fs.writeFile(
        path.join(__dirname, '../../data/initialState.json'),
        JSON.stringify(serverStore.getState()),
        error => (error) ? console.log("Error saving state!", error) : null
    )
)

const buildHTMLPage = ({html, state, css}) => `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
        <meta charset="utf-8">
        <title>Universal Color Organizer</title>
        <style>${staticCSS}</style>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(state)}
        </script>
        <script src="/bundle.js"></script>
    </body>
</html>
`

const renderComponentsToHTML = ({url, store}) =>
    ({
        state: store.getState(),
        html: renderToString(
            <Provider store={store}>
                <StaticRouter location={url} context={{}}>
                    <App />
                </StaticRouter>
            </Provider>
        )
    })

const makeClientStoreFrom = store => url =>
    ({
        url,
        store: storeFactory(false, store.getState())
    })

const htmlResponse = compose(
    buildHTMLPage,
    renderComponentsToHTML,
    makeClientStoreFrom(serverStore)
)

const respond = ({url}, res) =>
    res.status(200).send(
      htmlResponse(url)
    )

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

/*
  Связующий код, который добавляет серверное хранилище  к конвейеру запросов, чтобы его можно было использовать
  в ходе запроса другому связующему коду
 */
const addStoreToRequestPipeline = (req, res, next) => {
    req.store = serverStore
    next()
}

/*
  С помощью .use() функции объединяются в цепочку. express автоматически вставляет аргументы запроса и ответа в каждую
  из этих функций
*/
export default express()
    .use(bodyParser.json())
    .use(logger) // logger - связующий код
    .use(fileAssets)
    .use(addStoreToRequestPipeline)
    .use('/api', api)
    .use(respond)
