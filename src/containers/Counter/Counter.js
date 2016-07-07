import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as CounterActions from '../../redux/modules/Counter/action'
import { Count, Footer } from '../../components'
import styles from './counter.scss'

@connect(
    state => ({
        counter: state.counter
    }),
    dispatch => ({
        actions: bindActionCreators(CounterActions, dispatch)
    })
)
class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const { counter, actions } = this.props
        return (
            <div className="main-app-container">
                <div className={styles.demo}>这是css-module样式内容，查看元素上的类名试试！</div>
                <Count counter={counter} actions={actions} />
                <Link to={{ pathname: 'home', query: { Home: true } }} activeClassName="active">To Home With Query Params</Link>
                <Footer />
            </div>
        )
    }
}

export default Counter
