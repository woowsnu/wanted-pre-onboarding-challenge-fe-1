import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import classes from "./TodoInsert.module.css";

const TodoInsert = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title,
      content,
    };
    props.addTodo(todo);
    setTitle("");
    setContent("");
  };

  return (
    <form className={classes.addTodo} onSubmit={onSubmit}>
      <input
        className={classes.inputTodo}
        placeholder="제목"
        value={title}
        onChange={titleChangeHandler}
      />
      <input
        className={classes.inputTodo}
        placeholder="할 일"
        value={content}
        onChange={contentChangeHandler}
      />
      <button className={classes.buttonTodo} type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
