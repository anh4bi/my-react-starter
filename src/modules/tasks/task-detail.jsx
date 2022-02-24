import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ZButton from '../../components/zbutton/zbutton'
import axiosClient from '../../core/plugin/axiosClient'

const TaskDetail = () => {

    let [task, setTask] = useState({})
    let urlParams = useParams()
    let navigate = useNavigate()

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

        getDetailTask()
    },[urlParams.ID])

    return (
        <React.Fragment>
            <div className='task-detail__container'>
                <div className='task-detail__container__title'>Task Detail</div>
                <div className='task-detail__container__content'>{task.text}</div>
                <ZButton name='Update' onClick={() => navigate(`update`)} />
            </div>
        </React.Fragment>
    )
}

export default TaskDetail