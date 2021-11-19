
import React from 'react'
import './zbutton.css'

const ZButton = props => {
    return (
        <>
            <button className={`btn btn-${props.type} ${props.className}`} onClick={props.onClick}>{props.name}</button>
        </>
    )
}

ZButton.defaultProps = {
    className: '',
    type: 'primary'
}

export default ZButton
