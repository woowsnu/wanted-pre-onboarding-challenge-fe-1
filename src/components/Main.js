import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Header from "./Header";
import AddTodo from "./Todos/AddTodo";
import TodoList from "./Todos/TodoList";
import TodoTemplate from "./Todos/TodoTemplate";

const DUMMY = [
  {
    title: "hihi",
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

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [todo, ...prev];
    });
  };

  // const updateTodo = (title, modTodo) => {
  //   const modTodo = todos.map((item) => item.title == title)
  //   setTodos((prev) => {
  //     return [update]
  //   })
  // };

  const deleteTodo = (deleteData) => {
    const deletedTodo = todos.filter((item) => item.title != deleteData);
    setTodos(deletedTodo);
  };

  // deleteTodo
  // const deleteTodo = async (id) => {
  //   const res = await deleteTodoAPI(id);
  //   const todos = await res.json();
  //   setTodos(todos);
  // };

  return (
    <div>
      <Header />
      <TodoTemplate>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
      </TodoTemplate>
    </div>
  );
};

export default Main;
