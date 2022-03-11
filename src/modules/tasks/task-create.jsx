import React from 'react'
import { useState } from 'react'
import axiosClient from '../../core/plugin/axiosClient'
import ZButton from '../../components/zbutton/zbutton'
import './task.css'

const TaskCreate = ({ isShowing, hide }) => {

  const [task, setTask] = useState('')

  const onCreate = async () => {
    if (!task) return

    const res = await axiosClient.post('/tasks', { text: task })
    if (res.success) {
      setTask('')
      hide()
    } else {
      console.log(res.message)
    }
  }


  return (isShowing ?
    <React.Fragment>
      <div className="modal-overlay">
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="modal">

            {/* Header */}
            <div className="modal-header">
              <h2 className='modal-title'>Create Task</h2>
              <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">×</span>
              </button>
            </div>

            {/* Main Modal */}
            <div className='modal-body'>
              <div className='task-create__container'>
                <textarea className='task-update__text'
                  value={task}
                  rows={8} cols={50}
                  placeholder='Enter your task'
                  onChange={e => setTask(e.target.value)}></textarea>
                <ZButton className='task__button'
                  text="Create"
                  onClick={() => { onCreate() }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment> : null)
}

export default TaskCreate
