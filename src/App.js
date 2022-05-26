import React, { Component } from 'react'
import "./App.css"
import AddTask from './Components/AddTask'
import TodoCard from './Components/TodoCard'
import TodoList from './Components/TodoList'

export default class App extends Component {
  state = {
    todos : [
      {id:Math.random(), action : "Learn HTML",isDone : true},
      {id:Math.random(), action : "Learn Redux", isDone : false},
    ]
  }

handleDelete = (x) => {
  this.setState({todos:this.state.todos.filter(el => el.id !== x)})
}

handleComplete = (i) => {
  this.setState({ todos:this.state.todos.map
    (el => el.id===i ? {...el,isDone: !el.isDone} :el)})
}

handleAdd = (input) => {
  const newTask = {
    id:Math.random(), 
    action: input, 
    isDone: false,
  }
  this.setState({todos:[...this.state.todos, newTask]})
}


  render() {
    return (
      <div className='App'> 
        <AddTask add={this.handleAdd} />
        <TodoList list={this.state.todos} del={this.handleDelete} comp={this.handleComplete}/>
      </div>
    )
  }
}
