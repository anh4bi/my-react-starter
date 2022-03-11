
import React from 'react'
import './zbutton.css'

const ZButton = ({ type, className, onClick, text, outline, style }) => {
    return (
        <React.Fragment>
            <button
                className={`btn btn-${type}${outline ? '__outline' : ''} ${className}`}
                style={style}
                onClick={onClick}>{text}</button>
        </React.Fragment>
    )
}

ZButton.defaultProps = {
    className: '',
    type: 'primary',
    outline: false,
    style: {}
}

export default ZButton
