import React from 'react'
import ReactDOM from 'react-dom'
import './task.css'

const TaskCreate = ({ isShowing, hide }) => isShowing ? 
  <React.Fragment>
    <div className="modal-overlay">
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <p>
            Hello, I'm a modal.
          </p>
        </div>
      </div>
    </div>
  </React.Fragment> : null

export default TaskCreate
