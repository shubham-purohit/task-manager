import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, toggleReminder}) => {
  return (
    <div className={task.reminder ? 'task task_reminder' : 'task'} onDoubleClick={() => toggleReminder(task.id)}>
        <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task