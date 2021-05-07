import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import './App.css'

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
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
