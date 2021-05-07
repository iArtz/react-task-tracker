import { FaTimes } from 'react-icons/fa'

import PropTypes from 'prop-types'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

Task.defaultProps = {
  task: {
    id: 1,
    text: 'My Task',
    day: 'Feb 21th at 09:09am',
  },
}

// * PropTypes.objectOf is used when describing an object whose properties are all the same type.
// Task.propTypes = {
//   task: PropTypes.objectOf(PropTypes.string),
// }

// * PropTypes.shape is used when describing an object whose keys are known ahead of time, and may represent different types.
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    day: PropTypes.string,
  }),
}

export default Task
