import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ item: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          This is the to-do form.
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </>
    );
  }
}

export default TodoForm;
