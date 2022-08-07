import React, { Children } from "react";
import classes from "./TodoTemplate.module.css";

const TodoTemplate = ({children}) => {
  return (
    <div className={classes.TodoTemplate}>
      <div className={classes.appTitle}>일정 관리</div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default TodoTemplate;
