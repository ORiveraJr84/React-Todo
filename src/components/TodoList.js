// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const listofTasks = props.listofTasks;
  return (
    <ol>
      {listofTasks.map((task) => (
        <li>
          <Todo
            key={task.id}
            task={task}
            toggleCompleted={props.toggleCompleted}
          />
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
