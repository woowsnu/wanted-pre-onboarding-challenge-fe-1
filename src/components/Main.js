import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import TodoInsert from "./Todos/TodoInsert";
import TodoList from "./Todos/TodoList";
import TodoTemplate from "./Todos/TodoTemplate";

const DUMMY = [
  {
    title: "hi",
    content: "hello",
    id: "z3FGrcRL55qDCFnP4KRtn",
    createdAt: "2022-07-24T14:15:55.537Z",
    updatedAt: "2022-07-24T14:15:55.537Z",
  },
  {
    title: "hi",
    content: "hello",
    id: "z3FGrcRL55qDCFnP4KRtn",
    createdAt: "2022-07-24T14:15:55.537Z",
    updatedAt: "2022-07-24T14:15:55.537Z",
  },
];

const Main = () => {
  const [todos, setTodos] = useState(DUMMY);

  // useEffect(() => {
  //     axios({
  //       method: 'get', //you can set what request you want to be
  //       url: 'http://localhost:8080/todos',
  //       headers: {
  //         Authorization: 'Bearer '
  //       }
  //     }).then((res)=> {
  //       let todoList = res.data;
  //       setTodos([todoList]);
  //       console.log(todos)
  //     })}, []);

  const updateTodo = (todo) => {
    setTodos((prev)=>{
      return [todo, ...prev];
    });
  };

  return (
    <div>
      <Header />
      <TodoTemplate>
        <TodoInsert updateTodo={updateTodo}/>
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
};

export default Main;
