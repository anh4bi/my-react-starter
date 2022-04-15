import React from 'react'
import './task.css'
import ZButton from 'components/zbutton/zbutton'
import { useNavigate } from 'react-router-dom'

const Task = (props) => {

    let { id, status, text } = props.item || {}

    const navigate = useNavigate()
    const onDelete = () => props.onDelete(id)
    const onNavigate = () => navigate(`/tasks/${id}`, { state: props.item })
    const onDone = () => props.onDone(id)

    return (
        <>
            <div className='task__wrap'>
                {status ?
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 done" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 un-done" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                }
                <div className={`task ${status && 'status__done'}`} onClick={onNavigate}>{text}</div>
                <div className='actions'>
                    <ZButton className='done__task' style={{ backgroundColor: 'white' }} onClick={onDone} type='success' text={status ? 'Undone' : 'Done'} />
                    <ZButton className='del__task' onClick={onDelete} type='error' text='Delete' />
                </div>
            </div>
        </>
    )
}

export default Task
