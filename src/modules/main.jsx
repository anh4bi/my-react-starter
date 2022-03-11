import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Tasks from './tasks/tasks'
import About from './about/about'
import TaskDetail from './tasks/task-detail'
import TaskUpdate from './tasks/task-update'
import NotFound from './not-found'


const Main = () => {

    return (
        <React.Fragment>
            <div className='main__container'>
                <Routes>
                    <Route path="/" element={<Tasks />} />
                    <Route path="about" element={<About />} />
                    <Route path='tasks/:ID' element={<TaskDetail />} />
                    <Route path='tasks/:ID/update' element={<TaskUpdate />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}

export default Main
