import React, { PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'

//注入onTouchTap事件,在移动端请用onTouchTap替代onClick
injectTapEventPlugin()

function App({ children }) {
    return (
        <div className="page-container">
            {children}
        </div>
    )
}

App.propTypes = {
    children: PropTypes.element
}

export default App
