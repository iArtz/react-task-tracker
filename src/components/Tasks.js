import { useState } from 'react'
// import PropTypes from 'prop-types'

const Tasks = () => {
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
    <div>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </div>
  )
}

// Tasks.propTypes = {}

export default Tasks
