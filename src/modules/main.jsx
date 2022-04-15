import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './about/about'
import NotFound from './NotFound'
import TaskList from './tasks/TaskList'
import TaskUpdate from './tasks/TaskUpdate'
import TaskDetail from './tasks/TaskDetail'


const Main = () => {

    return (
        <React.Fragment>
            <div className='main__container'>
                <Routes>
                    <Route path="/" element={<TaskList />} />
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
