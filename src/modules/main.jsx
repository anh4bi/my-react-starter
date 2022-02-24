import React from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import ZButton from '../components/zbutton/zbutton'
import Tasks from './tasks/tasks'
import About from './about/about'
import TaskDetail from './tasks/task-detail'
import TaskUpdate from './tasks/task-update'
import NotFound from './not-found'


const Main = () => {
    let [modal, setModal] = useState(false)

    const text = 'Say hi with TinhTuTe'
    const showLog = () => {
        setModal(!modal)
    }

    return (
        <React.Fragment>
            <div className='main__container'>
                <ZButton text={text} type='success' onClick={showLog} />
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
