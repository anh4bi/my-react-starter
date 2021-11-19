import React from 'react'
import './task.css'
import ZButton from '../../components/zbutton/zbutton'

const Task = (props) => {

    const onDelete = () => props.onDelete(props.item.id)

    const onDone = () => props.onDone(props.item.id)

    return (
        <>
            <div className={`task__wrap ${props.item.status && 'status__done'}`}>
                <div className='task'>{props.item.text}</div>
                <div className='actions'>
                    <ZButton className='del__task' onClick={onDelete} type='error' name='Delete' />
                    <ZButton className='done__task' onClick={onDone} type='success' name='Done' />
                </div>
            </div>
        </>
    )
}

export default Task
