import React, { useState } from 'react'
import Button from './Button'
import AddTask from './AddTask'

const Header = ({addTask}) => {

const [viewToggle, setViewToggle] = useState(false)

 const toggleAddTaskView = () => {
    setViewToggle(!viewToggle)
 }

  return (
    <>
        <div className='header'>
            <h2>Task Manager</h2>
            <Button className={viewToggle ? 'btn-red' : ''} onClick={toggleAddTaskView} text={viewToggle ? 'Close' : 'Add'}></Button>
            <br></br>
        </div>
        <AddTask viewToggle={viewToggle} addTask={addTask}/>
    </>
  )
}

export default Header