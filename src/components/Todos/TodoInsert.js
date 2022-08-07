import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import classes from "./TodoInsert.module.css";

const TodoInsert = (props) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(e=> {
    props.onInsert(value);
    setValue('')

    e.preventDefault();
  }, [props.onInsert, value],)
  return (
    <form className={classes.addTodo} onSubmit={onSubmit}>
      <input
        className={classes.inputTodo}
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button className={classes.buttonTodo} type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
