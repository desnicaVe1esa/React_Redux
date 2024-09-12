import fetch from 'isomorphic-fetch'

const parseResponse = response => response.json()

const logError = error => console.error(error)

// thunk-функция
const fetchThenDispatch = (dispatch, url, method, body) =>
    fetch(url, {method, body, headers: { 'Content-Type': 'application/json' }})
        .then(parseResponse)
        .then(dispatch)
        .catch(logError)

// thunk-версия
export const addColor = (title, color) => dispatch =>
    fetchThenDispatch(
        dispatch,
        '/api/colors',
        'POST',
        JSON.stringify({title, color})
    )

export const removeColor = id => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/color/${id}`,
        'DELETE'
    )

// thunk-версия
export const rateColor = (id, rating) => dispatch =>
    fetchThenDispatch(
        dispatch,
        `/api/color/${id}`,
        'PUT',
        JSON.stringify({rating})
    )
