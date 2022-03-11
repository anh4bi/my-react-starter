import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ZButton from '../../components/zbutton/zbutton'
import axiosClient from '../../core/plugin/axiosClient'

const TaskDetail = () => {

    let [task, setTask] = useState({})
    let urlParams = useParams()
    let navigate = useNavigate()
    const state = useLocation()

    useEffect(() => {
        const getDetailTask = async () => {
            const res = await axiosClient.get(`/tasks/${urlParams.ID}`)
            if (res.success) {
                setTask(res.data)
                console.log(res.data)
            } else {
                console.log(res.message)
            }
        }

        // Get state from navigation, check if not null -> set task
        if (state.state) {
            setTask(state.state)
        } else {
            getDetailTask()
        }
    }, [urlParams.ID, state.state])

    return (
        <React.Fragment>
            <div className='task-detail__container'>
                <div className='task-detail__container__title'>Task Detail</div>
                <div className='task-detail__container__content'>{task.text}</div>
                <ZButton text='Update' onClick={() => navigate(`update`, { state: task })} />
            </div>
        </React.Fragment>
    )
}

export default TaskDetail