import React, { useState } from "react";
import {
  MdRemoveCircleOutline,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import classes from "./Todo.module.css";

const Todo = (props) => {
  const [todoTitle, setTodoTitle] = useState(props.title);
  const [todoContent, setTodoContent] = useState(props.content);
  const [edited, setEdited] = useState(false);

  const titleHandler = (e) => {
    setTodoTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setTodoContent(e.target.value);
  };

  const onDeleteHandler = () => {
    console.log(props.todo.title);
    props.deleteTodo(props.todo.title);
  };

  const onEditHandler = () => {
    setEdited(!edited);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const updateTodo = {
      title : todoTitle,
      content : todoContent
    }
    
  };

  return (
    <div className={classes.ListItem}>
      {edited ? (
        <form onSubmit={onSubmitHandler}>
          <input onChange={titleHandler} value={todoTitle} />
          <input onChange={contentHandler} value={todoContent} />
          <button type="submit">확인</button>
        </form>
      ) : (
        <div>
          <div className={classes.text}>{props.todo.title}</div>
          <div className={classes.text}>{props.todo.content}</div>
        </div>
      )}
      <div className={classes.update}>
        <MdOutlineModeEditOutline onClick={onEditHandler} />
      </div>
      <div className={classes.remove}>
        <MdRemoveCircleOutline
          onClick={onDeleteHandler}
          value={props.todo.title}
        />
      </div>
    </div>
  );
};

export default Todo;
