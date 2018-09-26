import React from 'react'

const Task = ({ id, isComplete, handleDelete, handleToggle, name }) =>
  <li className={isComplete ? "completed" : null}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={isComplete}
        onChange={() => handleToggle(id)} />
      <span>
        {name}
      </span>
      <button
        className="destroy"
        onClick={() => handleDelete(id)}
      />
    </div>
  </li>

const TaskList = ({ handleDelete, handleToggle, tasks }) =>
  <ul className="todo-list">
    {tasks.map(task =>
      <Task
        key={task.id}
        {...task}
        handleDelete={handleDelete}
        handleToggle={handleToggle} />
      )}
  </ul>

export default TaskList;