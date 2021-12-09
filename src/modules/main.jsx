import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ZButton from '../components/zbutton/zbutton'
import Tasks from './tasks/tasks'
import About from './about/about'

const Main = () => {

    const text = 'Say hi with TinhTuTe'
    const showLog = () => console.log(text)

    return (
        <React.Fragment>
            <div className='main__container'>
                <ZButton name={text} type='success' func={showLog} />
                <Routes>
                    <Route path="/" element={<Tasks />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}

export default Main
