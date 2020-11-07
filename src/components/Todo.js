import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: false,
    };
  }

  render() {
    return (
      <div
        onClick={() => this.props.toggleCompleted(this.props.task.id)}
        className={this.props.task.completed === true ? "completed" : null}
      >
        {this.props.task.name}
      </div>
    );
  }
}

export default Todo;
