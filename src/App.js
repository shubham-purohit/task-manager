import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 9th at 4:30pm',
      reminder: false
    }
  ])

  const addTask = ({text,day,reminder}) => {
    const task = {
      id: getId(),
      text: text,
      day: day,
      reminder: reminder
    }
    console.log(task)
    setTasks([...tasks, task])
  }

  const getId = () => {
    return Math.floor(Math.random()*10000) + 1;
  }

  const onDelete = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  }

  return (
    <div className="container">
      <Header addTask={addTask}/>
      <TaskList tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder} addTask={addTask}/>
    </div>
  );
}

export default App;
