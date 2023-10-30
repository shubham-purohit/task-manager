import React from 'react'
import Task from './Task'

const TaskList = ({tasks, onDelete, toggleReminder}) => {
  return (
    <div className='taskList'>
    {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder}/>
    ))}
    </div>
  )
}

export default TaskList