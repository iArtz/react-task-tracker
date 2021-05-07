const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </div>
  )
}

export default Tasks
