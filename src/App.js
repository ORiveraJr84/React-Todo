import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles.css";

const listOfTasks = [
  {
    completed: false,
    id: 1,
    name: "Complete homework assignments.",
  },
  {
    completed: false,
    id: 2,
    name: "Study for sprint.",
  },
  {
    completed: false,
    id: 3,
    name: "Make up some shit.",
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      listOfTasks,
    };
  }

  addItem = (item) => {
    const newItem = {
      completed: false,
      id: Date.now(),
      name: item,
    };

    this.setState({
      listOfTasks: [...this.state.listOfTasks, newItem],
    });
  };

  toggleCompleted = (itemId) => {
    this.setState({
      listOfTasks: this.state.listOfTasks.map((task) => {
        if (itemId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      listOfTasks: this.state.listOfTasks.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          listofTasks={this.state.listOfTasks}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
