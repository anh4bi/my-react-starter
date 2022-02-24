import React from 'react'
import { useParams } from 'react-router-dom'

const TaskUpdate = () => {

    const parmas = useParams()

    return (
        <React.Fragment>
            <div>UpdateTask</div>
            <div>{parmas.ID}</div>
        </React.Fragment>
    )
}

export default TaskUpdate