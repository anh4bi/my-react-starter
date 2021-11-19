import React, { useState, useEffect } from 'react'
import Task from './task'
import ZButton from '../../components/zbutton/zbutton'
import ZInput from '../../components/zinput/zinput'


const API_URL = 'http://192.168.1.10:8080/tasks'


export const Tasks = () => {

    // Initialize state
    const [task, setTask] = useState()
    const [tasks, setTasks] = useState([])
    const [isLoading, setLoading] = useState(false)

    // Fetch tasks from server
    useEffect(() => {
        const getTasks = async () => {
            const req = await fetch(API_URL)
            const res = await req.json()
            setTasks(res.data)
        }
        getTasks()
    }, [])



    /*
    *   Hanndle
    */
   // Add task
    const onAddTask = async () => {
        if (!task) return
        setLoading(true)
        const req = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: task })
        })
        const res = await req.json()
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
        const req = await fetch(`${API_URL}/${ID}`, {
            method: 'DELETE'
        })
        const res = await req.json()
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
        const req = await fetch(`${API_URL}/${ID}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const res = await req.json()
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
