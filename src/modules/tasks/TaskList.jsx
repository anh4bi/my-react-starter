import React, { useState, useEffect, useContext } from 'react'
import Task from './Task'
import TaskCreate from './TaskCreate'
import ZButton from 'components/zbutton/zbutton'
import axiosClient from 'core/plugin/axiosClient'
import LoadingContext from 'core/context/loading-context'


const TaskList = () => {

    // Initialize state
    const [tasks, setTasks] = useState([])
    const [modal, setModal] = useState(false)
    const { setLoading } = useContext(LoadingContext)


    const getTasks = async () => {
        setLoading(true)
        const res = await axiosClient.get('/tasks')
        if (res.success) {
            setLoading(false)
            setTasks(res.data)
        } else {
            console.log(res.message)
        }
    }

    // Fetch tasks from server
    useEffect(() => {
        getTasks()
    }, [modal])



    /*
    *   Handle
    */
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


    const handleModal = () => {
        getTasks()
        setModal(!modal)
    }


    /**
     *  Render
     */
    return (
        <div className='tasks__container'>
            <TaskCreate isShowing={modal} hide={() => handleModal()} />
            <div className='header__tasks'>
                <ZButton className='add__task' text='Add Task' type='primary' onClick={() => setModal(!modal)} />
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

export default TaskList
