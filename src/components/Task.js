import PropTypes from 'prop-types'

const Task = ({ task }) => {
  return (
    <div className='task'>
      <h1>{task}</h1>
    </div>
  )
}

Task.defaultProps = {
  task: 'My Task',
}

Task.propTypes = {
  task: PropTypes.string,
}

export default Task
