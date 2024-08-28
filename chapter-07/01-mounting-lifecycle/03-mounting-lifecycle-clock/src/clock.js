import { Component } from 'react'
import { getClockTime } from './lib'

export default class Clock extends Component {

    constructor() {
        super()
        this.state = getClockTime()
    }

    // Вызывается сразу после отображения компонента на экране
    componentDidMount() {
        console.log("Starting Clock")
        this.ticking = setInterval(() =>
                this.setState(getClockTime())
            , 1000)
    }

    // Вызывается перед удалением компонента с экрана
    componentWillUnmount() {
        clearInterval(this.ticking)
        console.log("Stopping Clock")
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{ampm}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }

}