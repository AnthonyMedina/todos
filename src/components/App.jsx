import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TaskAdder from './TaskAdder'
import TaskList from './TaskList'
import Footer from './Footer'
import { saveTask, loadTasks, destroyTask, updateTask } from '../api'
import { filterTasks } from '../utils/index'

class App extends Component {
  state = {
    tasks: []
  }

  componentDidMount () {
    loadTasks()
      .then((tasks) => this.setState({ tasks }))
      .catch(() => this.setState({ error: true }))
  }

  handleDelete = (id) => {
    destroyTask(id)
      .then(() => this.setState({
        tasks: this.state.tasks.filter(t => t.id !== id)
      }))
  }

  handleToggle = (id) => {
    const targetTask = this.state.tasks.find(t => t.id === id);
    const updated = {
      ...targetTask,
      isComplete: !targetTask.isComplete
    }
    updateTask(updated)
      .then((task) => {
        const tasks = this.state.tasks.map(
          t => t.id === task.id ? task : t
        )
        this.setState({ tasks })
      })
  }

  addTask = (currentTask) => {
    const newTask = { name: currentTask, isComplete: false };
    saveTask(newTask)
      .then((task) => this.setState({
        tasks: [...this.state.tasks, task]
      }))
      .catch(() => this.setState({error: true}))
  }

  render () {
    const remaining = this.state.tasks.filter(t => !t.isComplete).length;
    return (
      <Router>
        <div>
          <header className="header">
            <h1>Testing Tasks</h1>
            {this.state.error && <span className='error'>Oh no!</span>}
            <TaskAdder
              addTask={this.addTask}
              handleNewTaskChange={this.handleNewTaskChange}/>
          </header>
          <section className="main">
          <Route path='/:filter?' render={({match}) =>
            <TaskList
              tasks={filterTasks(match.params.filter, this.state.tasks)}
              handleDelete={this.handleDelete}
              handleToggle={this.handleToggle} />
            } />
          </section>
          <Footer remaining={remaining} />
        </div>
      </Router>
    )
  }
}

export default App;