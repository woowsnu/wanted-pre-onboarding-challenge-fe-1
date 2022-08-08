import React from "react";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = (props) => {

  return (
    <div className={classes.Todolist}>
      {props.todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.title}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
