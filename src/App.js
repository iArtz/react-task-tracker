import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'A',
      day: 'Feb 5th at 2:30pm',
    },
    {
      id: 2,
      text: 'B',
      day: 'Feb 6th at 3:30pm',
    },
    {
      id: 3,
      text: 'C',
      day: 'Feb 6th at 4:30pm',
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App
