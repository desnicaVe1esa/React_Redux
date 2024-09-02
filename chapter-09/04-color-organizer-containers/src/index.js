import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

render(
    // Provider React Redux добавляет хранилище к контексту и обновляет компонент App после диспетчеризации действий
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
)