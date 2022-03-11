import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axiosClient from '../../core/plugin/axiosClient'
import ZButton from '../../components/zbutton/zbutton'


const TaskUpdate = () => {

    const parmas = useParams()
    const state = useLocation()

    const [task, setTask] = useState({ status: false })

    useEffect(() => {
        const getDetailTask = async () => {
            const res = await axiosClient.get(`/tasks/${parmas.ID}`)
            if (res.success) {
                setTask(res.data)
                console.log(res.data)
            } else {
                console.log(res.message)
            }
        }

        if (state.state) {
            setTask(state.state)
        } else {
            getDetailTask()
        }
    }, [parmas.ID, state.state])

    const onUpdate = async () => {
        if (!task) return

        const res = await axiosClient.put(`/tasks/${parmas.ID}`, { text: task.text, status: task.status })
        if (res.success) {
            console.log(res.message)
        } else {
            console.log(res.message)
        }
    }


    return (
        <React.Fragment>
            <div className='task-update__container'>
                <div className='task-update__title'>Task Update</div>
                <textarea className='task-update__text'
                    value={task.text}
                    onChange={e => setTask({ ...task, text: e.target.value })}></textarea>
                <div className='task-update__status'>
                    <input type="checkbox"
                        checked={task.status}
                        value={task.status}
                        onChange={e => setTask({ ...task, status: e.target.checked })} />
                    <label>{ task.status ? 'Done' : 'Undone' }</label>
                </div>
                <ZButton onClick={() => onUpdate()} text="Update" />
            </div>
        </React.Fragment>
    )
}

export default TaskUpdate