import React, { Component } from 'react'
import { Link } from 'react-router'
import { Footer } from '../../components'
import img from '../../static/images/react.png'

class Home extends Component {
    render () {
        return(
            <div>
                <h2 className="text-center">simple-redux-starter</h2>
                <img src={img} className="react-img" />
                <br/>
                <Link to="counter">
                    <span>counter传送门</span>
                    <i className="icon iconfont">&#xe601;</i>
                </Link>
                <Footer />
            </div>
        )
    }
}

export default Home
