import React, { useState } from 'react'
import './zinput.css'

const ZInput = (props) => {
    const [text, setText] = useState('')

    const onChange = (event) => {
        setText(event.target.value)
        props.onChange(event.target.value)
    }

    const onEnter = (event) => {
        if (event.key === 'Enter') {
            props.onEnter(event.target.value)
            setText('')
        }
    }


    return (
        <>
            <input
                className={`zinput ${props.type} ${props.className}`}
                placeholder={props.placeholder}
                value={text}
                onChange={onChange}
                onKeyDown={onEnter}
                type='text'
            />
        </>
    )
}

ZInput.defaultProps = {
    placeholder: 'Enter some text',
    type: 'primary',
    className: ''
}

export default ZInput
