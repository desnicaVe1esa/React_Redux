import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Clock from './clock'
const target = document.getElementById('react-container')

window.React = React

render(
    // unmountComponentAtNode - удаляет компоненты с экрана
    <Clock onClose={() => unmountComponentAtNode(target) }/>,
    target
)