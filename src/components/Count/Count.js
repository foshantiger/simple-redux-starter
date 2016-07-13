import React, { Component, PropTypes } from 'react'
import styles from './index.scss'

class Count extends Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props)
        this.handleIncrement = ::this.handleIncrement
        this.handleDecrement = ::this.handleDecrement
    }

    handleIncrement() {
        this.props.actions.increment()
    }

    handleDecrement() {
        this.props.actions.decrement()
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.label}>{this.props.counter}</div>
                <div className={styles.counter}>
                    {this.props.counter % 2 === 0 ? 'even' : 'odd'}
                </div>
                <br />
                <div className={styles.buttons}>
                    <button onClick={this.handleDecrement}> - </button>
                    <button onClick={this.handleIncrement}> + </button>
                </div>
            </div>
        )
    }
}

export default Count