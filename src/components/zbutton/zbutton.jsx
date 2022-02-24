
import React from 'react'
import './zbutton.css'

const ZButton = ({ type, className, onClick, text }) => {
    return (
        <React.Fragment>
            <button className={`btn btn-${type} ${className}`} onClick={onClick}>{text}</button>
        </React.Fragment>
    )
}

ZButton.defaultProps = {
    className: '',
    type: 'primary'
}

export default ZButton
