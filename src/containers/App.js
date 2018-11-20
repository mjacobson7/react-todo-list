import React, { Component } from 'react';
import './App.css';
import TodoList from '../components/TodoList/TodoList';
import CompletedList from '../components/CompletedList/CompletedList';
import AddTodo from '../components/AddTodo/AddTodo';

class App extends Component {

  state = {
    inputVal: '',
    todoList: [],
    completedList: []
  }

  addTodoHandler = () => {
    const list = [...this.state.todoList];
    list.push(this.state.inputVal);
    this.setState({ todoList: list, inputVal: '' })
  }

  inputValHandler = (event) => {
    this.setState({ inputVal: event.target.value })
  }

  checkItemHandler = (event, i) => {
    if (event.target.checked) {
      const list = [...this.state.todoList];
      const completedList = [...this.state.completedList];
      const removedItem = list.splice(i, 1);
      completedList.push(removedItem);
      this.setState({ todoList: list, completedList: completedList })
    }
  }

  render() {

    return (
      <div className="App">
        <AddTodo
          inputVal={this.state.inputVal}
          onAddItem={(event) => this.addTodoHandler(event)}
          onValChange={(event) => this.inputValHandler(event)} />
        <div className="lists">
          <TodoList
            todoList={this.state.todoList}
            changed={(event, i) => this.checkItemHandler(event, i)} />

          <CompletedList
            completedList={this.state.completedList} />
        </div>

      </div>
    );
  }
}

export default App;
