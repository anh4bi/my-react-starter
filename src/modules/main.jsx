import React from 'react'
import ZButton from '../components/zbutton/zbutton'
import { Tasks } from './tasks/tasks'

const Main = () => {

    const text = 'Say hi with TinhTuTe'
    const showLog = () => console.log(text)

    return (
        <>
            <div className='main__container'>
                <ZButton name={text} type='success' func={showLog} />
                <Tasks />
            </div>
        </>
    )
}

export default Main
