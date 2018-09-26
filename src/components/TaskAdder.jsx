import React, { Component } from 'react';

class TaskAdder extends Component {
  state = {
    currentTask: ''
  }

  render () {
    const { currentTask } = this.state;
    return <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        autoFocus
        name="currentTask"
        value={currentTask}
        onChange={this.handleChange}
        aria-label="add a task"
        className="new-todo"
        placeholder="What needs to be done?" />
    </form>
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.currentTask);
    this.setState({
      currentTask: ''
    })
  }
}

export default TaskAdder;