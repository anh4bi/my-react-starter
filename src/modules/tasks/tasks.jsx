import React, { useState, useEffect } from 'react'
import Task from './task'
import ZButton from '../../components/zbutton/zbutton'
import ZInput from '../../components/zinput/zinput'
import axiosClient from '../../core/plugin/axiosClient'


export const Tasks = () => {

    // Initialize state
    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([])
    const [isLoading, setLoading] = useState(false)

    // Fetch tasks from server
    useEffect(() => {
        const getTasks = async () => {
            const res = await axiosClient.get('/tasks')
            setTasks(res.data)
        }
        getTasks()
    }, [])



    /*
    *   Handle
    */
   // Add task
    const onAddTask = async () => {
        if (!task) return
        setLoading(true)
        const res = await axiosClient.post('/tasks', { text: task })
        if (res.success) {
            setLoading(false)
            setTasks([...tasks, res.data])
        } else {
            console.log(res.message)
        }
    }

    // Delete task
    const onDelete = async (ID) => {
        setLoading(true)
        const res = await axiosClient.delete(`/tasks/${ID}`)
        if (res.success) {
            setLoading(false)
            setTasks([...tasks.filter(el => el.id !== ID)])
        } else {
            console.log(res.message)
        }
    }

    // Check task
    const onDone = async (ID) => {
        setLoading(true)
        const res = await axiosClient.put(`/tasks/${ID}/status`)
        if (res.success) {
            setLoading(false)
            setTasks([...tasks.map(task => task.id === ID ? { ...task, status: !task.status } : task)])
        } else {
            console.log(res.message)
        }
    }

    const onSubmit = (task) => {
        setLoading(true)
        setTask(task)
        onAddTask()
    }

    const onText = (event) => {
        setTask(event)
    }


    /**
     *  Render
     */
    return (
        <div className='tasks__container'>
            <div className='header__tasks'>
                <ZButton className='add__task' name='Add Task' type='primary' onClick={onAddTask} />
                <ZInput className='input__task' onEnter={onSubmit} onChange={onText} placeholder='Enter new task' />
                {isLoading && <div className='loading' />}
            </div>
            <div className='body__tasks'>
                {tasks.map((task) => {
                    return (
                        <Task key={task.id} item={task} onDone={onDone} onDelete={onDelete} />
                    )
                })}
            </div>
        </div>
    )
}
