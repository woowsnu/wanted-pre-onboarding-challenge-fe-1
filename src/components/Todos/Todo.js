import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import classes from "./Todo.module.css";

const Todo = (props) => {

  return (
    <div className={classes.ListItem}>
      <div className={classes.checkbox}>
        {props.todo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
        <div className={classes.text}>{props.todo.title}</div>
        <div className={classes.text}>{props.todo.content}</div>
      </div>
      <div className={classes.remove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default Todo;