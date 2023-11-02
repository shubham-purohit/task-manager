import React from 'react'
import { useState } from 'react';

const AddTask = ({viewToggle,addTask}) => {
 
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const submitTask = () => {
    if(!text) {
        alert("Please enter text value!")
        return;
    }
    addTask({text,day,reminder})

    setText('')
    setDay('')
    setReminder(false)
    console.log("Task Logged!!")
  }
  
  return viewToggle && (
    <form action='#' onSubmit={submitTask}>
        <div className='form-control'>
            <label>Task </label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='input' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className='form-control form-checked'>
            <label>Set Reminder </label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        <button type='submit' className='btn btn-save'>Save Task</button>
    </form>
  )
}

export default AddTask
