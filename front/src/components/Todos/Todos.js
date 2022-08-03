import React from "react";
import Todo from "./Todo/Todo";

const Todos = (props) => {
  // deleteTodo
  const deleteTodo = (id) => {
    props.deleteTodo(id); // main.js에서 props로 내려받은 deletetodo 호출
  };

  // Todo 업데이트 (deleteTodoHandler)
  const updateTodo = (id) => {
    // console.log('deleteTodo');
    props.updateTodo(props.id);
  };

  const todos = props.todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      title={todo.title}
      description={todo.description}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
  ));

  return <ul>{todos}</ul>;
};

export default Todos;
