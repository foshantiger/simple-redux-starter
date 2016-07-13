import React, { Component } from 'react'
import { Link } from 'react-router'
import { Footer } from '../../components'
import img from '../../static/images/react.png'
import styles from './index.scss'

function Home() {
    return(
        <div>
            <h2 className="text-center">simple-redux-starter</h2>
            <Link to="counter" className="text-center block">
                <span>go to counter</span>
                <i className="icon iconfont">&#xe601;</i>
            </Link>
            <img src={img} className={styles.img} />
            <Footer />
        </div>
    )
}

export default Home
